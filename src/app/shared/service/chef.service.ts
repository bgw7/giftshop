import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chef } from '../model/Chef';
import { Observable } from 'rxjs';

@Injectable()
export class ChefService {
    readonly API_URL = '/api/chefs'

    constructor(private http: HttpClient){}

    loadChef(id: number): Observable<Chef> {
        return this.http.get<Chef>(`${this.API_URL}/${id}`);
    }

    updateChef(chef: Chef): Observable<{}> {
        return this.http.put(`${this.API_URL}`, chef);
    }
}