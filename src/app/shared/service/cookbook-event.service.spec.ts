import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Subject } from 'rxjs';
import { CookbookEventStore } from './../state/cookbook-event.store';
import { CookbookEventService } from './cookbook-event.service';

describe('CookbookEventService', () => {
    let service: CookbookEventService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                CookbookEventService,
                {
                    provide: CookbookEventStore,
                    useValue: new Subject()
                }
            ]
        });
        service = TestBed.get(CookbookEventService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should instantiate', () => {
        expect(service).toBeTruthy();
    });

    it('should be TRUE when CHEFID changes', () => {
        service._chef$.next({ id: 3, name: 'bob', inventory: null });
        expect(service.hasChefIdChanged(1)).toBeTruthy();
        expect(service.hasChefIdChanged(0)).toBeTruthy();
    });

    it('should return FALSE when CHEFID does NOT change', () => {
        service._chef$.next({ id: 3, name: 'bob', inventory: null });
        expect(service.hasChefIdChanged(3)).toBeFalsy();
        service._chef$.next({ id: 0, name: 'bob', inventory: null });
        expect(service.hasChefIdChanged(0)).toBeFalsy();
    });

    it('should close and open EVENTSOURCE when CHEFID changes', () => {
        service._chef$.next({ id: 1, name: 'joe', inventory: null });
        spyOn(service, 'openEventSource');
        spyOn(service, 'closeEventSource');
        service._chef$.next({ id: 2, name: 'bob', inventory: null });
        expect(service.closeEventSource).toHaveBeenCalled();
        expect(service.openEventSource).toHaveBeenCalled();
    });

    it('should close and NOT open EVENTSOURCE when CHEFID is falsy', () => {
        service._chef$.next({ id: 1, name: 'joe', inventory: null });
        spyOn(service, 'openEventSource');
        spyOn(service, 'closeEventSource');
        service._chef$.next({ id: 0, name: 'bob', inventory: null });
        expect(service.closeEventSource).toHaveBeenCalled();
        expect(service.openEventSource).not.toHaveBeenCalled();
    });

    it('should close EventSource', () => {
        service._chef$.next({ id: 12, name: 'joe', inventory: null });
        spyOn(service._eventSource, 'close');
        service.closeEventSource();
        expect(service._eventSource.close).toHaveBeenCalled();
    });

    it('should send EventSource messages to the _subject', () => {
        const message = <MessageEvent>{ data: '{ "Chef": { "id": 24, "name": "nick" } }' };
        service._subject.subscribe(event => {
            expect(event).toEqual(JSON.parse(message.data));
        });
        service._chef$.next({ id: 2, name: "joe", inventory: null });
        service._eventSource.onmessage(message);
    })

})