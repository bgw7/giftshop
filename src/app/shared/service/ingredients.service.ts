import { Ingredient } from './../model/Ingredient';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientsService {

    readonly API_URL = '/api/ingredients';

    constructor(private http: HttpClient) {}

    getIngredients(): Observable<Ingredient[]> {
        return this.http.get<Ingredient[]>(`${this.API_URL}`);
    }

    getIngredientsById(id : number[]): Observable<Ingredient[]> {
        let requestParam = '';
        id.forEach((nextId, index) => {
            requestParam = index === id.length - 1 ? requestParam.concat('id=', nextId.toString()) : requestParam.concat('id=', nextId.toString(), '&');
        });
        return this.http.get<Ingredient[]>(`${this.API_URL}?${requestParam}`);
    }
}