import { Chef } from '../model/Chef';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChefService } from '../service/chef.service';
import { ChefStore } from './chef.store';
import { CookbookEventStore } from './cookbook-event.store';
import { CookbookEvent } from '../model/CookbookEvent';
import { mock } from '../../../test';
import { of } from 'rxjs';

const CHEF_ID = 1234;

describe('CookbookEventStore', () => {
    let CHEF;
    let mockEvent: CookbookEvent;
    let store: CookbookEventStore;
    let chefStore: ChefStore;
    let chefService: ChefService;
    let mockChefStore = new BehaviorSubject({ id: 321, name: 'tim' });

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CookbookEventStore,
                mock(ChefStore, mockChefStore),
                mock(ChefService, { loadChef: () => of(CHEF) })
            ]
        });
        CHEF = { id: CHEF_ID, name: 'tim' };
        mockEvent = { Chef: { id: 23, name: 'rob' } };
        mockChefStore.complete = () => {};
        mockChefStore.getValue = () => CHEF;
        store = TestBed.get(CookbookEventStore);
        chefStore = TestBed.get(ChefStore);
        chefService = TestBed.get(ChefService);
        store.init;
    });

    it('should dispatch payloads from actions', () => {
        store.dispatch({ type: 'ON_EVENT', payload: mockEvent });
        store.subscribe(event => {
            expect(event).toEqual(mockEvent);
        })
    });

    it('should init CHEF side effects', () => {
        expect(Object.keys(store.sideEffects)).toEqual(Object.keys(mockEvent));
    });

    it('should have ACTIONS nad STORES for each SIDE EFFECT', () => {
        Object.keys(store.sideEffects).forEach(key => {
            expect(Object.keys(store.sideEffects[key])).toEqual(['action', 'store']);
        });
    });

    it('should subscribe stores for each side effect', () => {
        spyOn(store, 'createSubscription').and.callThrough();
        store.init();
        expect(store.createSubscription).toHaveBeenCalledWith('Chef');
    });

    it('should dispatch events using the ACTIONS and STORES for each SIDE EFFECT', () => {
        let mockStore = new BehaviorSubject({});
        store.sideEffects.MockEffect = {
            action: event => Observable.of({ type: 'UPDATE', payload: event }),
            store: mockStore
        };

        spyOn(store, 'subscribe').and.callThrough();
        spyOn(mockStore, 'next').and.callThrough();

        store.createSubscription('MockEffect');
        expect(store.subscribe).toHaveBeenCalled();

        store.dispatch({ type: 'ON_EVENT', payload: { MockEffect: { id: 4 } } });
        expect(mockStore.next).toHaveBeenCalledWith({ type: 'UPDATE', payload: { id: 4 } });
    });

    it('should call ACTION from the corresponding SIDE EFFECT', () => {
        spyOn(store.sideEffects.Chef, 'action').and.callThrough();
        store.getAction(mockEvent, 'Chef');
        expect(store.sideEffects.Chef.action).toHaveBeenCalledWith(mockEvent.Chef);
        expect(store.sideEffects.Chef.action).toHaveBeenCalledTimes(1);
    })
});
