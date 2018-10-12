import { mapAction } from './../state/store';
import { takeWhile, filter } from 'rxjs/operators';
import { CookbookEventStore } from './../state/cookbook-event.store';
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable, NgZone, OnDestroy } from "@angular/core";
import { CookbookEvent } from '../model/CookbookEvent';
import { Chef } from '../model/Chef';

declare var EventSource: any;

@Injectable()
export class CookbookEventService implements OnDestroy {

    readonly API_URL = '/api/cookbook-events';

    _subject = new Subject<CookbookEvent>();
    _chef$ = new BehaviorSubject<Chef>(<Chef>{});
    _chefId: number;
    _eventSource: EventSource;
    alive = true;

    constructor(private ngZone: NgZone,
                private cookbookEventStore: CookbookEventStore) {
                    this.init();
                }
    init(): void {
        this._subject.asObservable().pipe(
            takeWhile(() => this.alive),
            mapAction('ON_EVENT'))
        .subscribe(this.cookbookEventStore);

        this._chef$.pipe(
            takeWhile(() => this.alive),
            filter(chef => this.hasChefIdChanged(chef.id)))
            .subscribe(chef => this.resetEventSource(chef));
    }

    resetEventSource(chef: Chef): void {
        this.closeEventSource();
        this._chefId = !!chef.id ? chef.id : 0;
        if (this._chefId) {
            this.openEventSource();
        }
    }

    openEventSource(): void {
        this._eventSource = new EventSource(`${this.API_URL}/${this._chefId}`);

        this._eventSource.onmessage = (event: MessageEvent) => {
            try {
                let cookbookEvent: CookbookEvent = JSON.parse(event.data);
                this.ngZone.run(() => this._subject.next(cookbookEvent));
            } catch(error) {
                console.log('Error parsing cookbook eventsource message: ', error);
            }
        }

        this._eventSource.onerror = () => {
            if(this._eventSource.readyState === 2) {
                this.ngZone.run(() => this._eventSource.close());
            };
        }
    }

    closeEventSource(): void {
        if(this._eventSource) {
            this.ngZone.run(() => this._eventSource.close());
        }
    }

    hasChefIdChanged(id: number): boolean {
        return this._chefId !== id;
    }

    ngOnDestroy(): void {
        this.closeEventSource();
        this.alive = false;
    }
}