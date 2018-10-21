import { ChefIngredient } from '../model/Ingredient';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ChefIngredientsService {
    readonly API_URL = '/api/chefIngredients'

    constructor(private http: HttpClient){}

    getChefIngredientsById(id: number): Observable<ChefIngredient[]> {
        return this.http.get<ChefIngredient[]>(`${this.API_URL}`, { params: new HttpParams().set('chefId', String(id)) });
    }
}