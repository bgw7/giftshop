import { TestBed } from '@angular/core/testing';
import { Chef } from '../model/Chef';
import { ChefStore } from './chef.store';

const CHEF = <Chef> { id: 1, name: 'joe' };

describe('ChefStore', () => {
    let store: ChefStore;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ChefStore]
        })

        store = TestBed.get(ChefStore);
    });

    it('should dispatch a LOADED action', () => {
        store.dispatch({ type: 'LOADED', payload: CHEF });
        store.subscribe(chef => {
            expect(chef).toEqual(CHEF);
        });
    });

    it('should dispatch a UPDATED action', () => {
        store.dispatch({ type: 'UPDATED', payload: CHEF });
        store.subscribe(chef => {
            expect(chef).toEqual(CHEF);
        });
    });
})