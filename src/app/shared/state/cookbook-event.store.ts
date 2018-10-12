import 'rxjs/add/observable/of';
import { EMPTY_COOKBOOK_EVENT } from './../model/CookbookEvent';
import { Injectable, OnDestroy } from "@angular/core";
import { Store, Action } from "./store";
import { CookbookEvent } from "../model/CookbookEvent";
import { Observable } from 'rxjs';
import { takeWhile, filter, mergeMap } from 'rxjs/operators';
import { ChefStore } from './chef.store';

@Injectable()
export class CookbookEventStore extends Store<CookbookEvent> implements OnDestroy {
    sideEffects;
    alive: boolean;

    constructor(private chefStore: ChefStore) {

    super(EMPTY_COOKBOOK_EVENT, {
        ON_EVENT: (state: CookbookEvent, action: Action): CookbookEvent => ({ ...state, ...action.payload })
    });

    this.init();
    }

    init(): void {
        this.alive = true;
        this.sideEffects = {
            Chef: {
                action: chef => Observable.of(<Action>{ type: 'UPDATED', payload: chef }),
                store: this.chefStore
            }
        };

        this.subscribeEffectedStores();
    }

    subscribeEffectedStores(): void {
        Object.keys(this.sideEffects).forEach(key => {
            this.createSubscription(key);
        });
    }

    createSubscription(model: string): void {
        this.pipe(
            takeWhile(() => this.alive),
            filter((event: CookbookEvent) => model in event),
            mergeMap(event => this.getAction(event, model)))
            .subscribe(this.sideEffects[model].store);
    }

    getAction(event: CookbookEvent, model: string): Observable<Action> {
        return this.sideEffects[model].action(event[model]);
    }
}