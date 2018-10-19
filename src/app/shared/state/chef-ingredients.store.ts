import { ChefIngredient } from './../model/Ingredient';
import { Action, Store } from './store';
import { Injectable } from '@angular/core';


@Injectable()
export class ChefIngredientsStore extends Store<ChefIngredient[]> {
    constructor(){
        super([], {
            LOADED: (state: ChefIngredient[], action: Action): ChefIngredient[] => [...action.payload],
            UPDATED: (state: ChefIngredient[], action: Action): ChefIngredient[] => [...action.payload]
        });
    }
}