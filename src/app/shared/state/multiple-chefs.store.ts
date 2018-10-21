import { Action, Store } from './store';
import { Injectable } from '@angular/core';
import { Chef } from '../model/Chef';

@Injectable()
export class MultipleChefsStore extends Store<Chef[]> {
    constructor(){
        super(<Chef[]>[], {
            LOADED: (state: Chef[], action: Action): Chef[] => [...action.payload]
        });
    }
}