import { Ingredient } from './../model/Ingredient';
import { Action, Store } from './store';
import { Injectable } from '@angular/core';


@Injectable()
export class IngredientsStore extends Store<Ingredient[]> {
    constructor(){
        super([], {
            LOADED: (state: Ingredient[], action: Action): Ingredient[] => [...action.payload],
            UPDATED: (state: Ingredient[], action: Action): Ingredient[] => [...action.payload]
        });
    }
}