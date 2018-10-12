import { OnDestroy } from '@angular/core';
import { distinctUntilChanged, map, scan } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export type Action = {
    type: string;
    payload: any;
};

export const mapAction = (type: string) => map(payload => ({ type, payload }));

export type Reducer<T> = (state: T, action: Action) => T;

export abstract class Store<T> extends BehaviorSubject<T> implements OnDestroy {
    private _dispatcher = new Subject<Action>();

    constructor(initialState: T, reducers: { [key: string]: Reducer<T> }) {
        super(initialState);

        this._dispatcher.pipe(scan(
            (state: T, action: Action): T => 
            (reducers[action.type]) ? reducers[action.type](state, action): state, this.getValue()
        ))
        .subscribe(state => super.next(state));
    }

    getState(): T {
        let value = this.getValue();
        return Object.assign(value instanceof Array ? []: {}, value);
    }

    dispatch(action: Action): void {
        this._dispatcher.next(action);
    }

    next(value): void {
        this._dispatcher.next(value);
    }

    complete(): void {}

    select<K extends keyof T>(key: K): Observable<T[K]> {
        return this.pipe(
            map(obs => obs[key]), 
            distinctUntilChanged());
    }

    ngOnDestroy(): void {
        this.complete();
    }
}