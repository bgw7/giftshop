# AngularRedux

This Angular project is an implementation of the [Redux pattern](https://redux.js.org/) following these [three principles](https://redux.js.org/introduction/threeprinciples) using [ReactiveX/RxJS](https://github.com/ReactiveX/rxjs).

[Services](https://github.com/bgw7/bgw7.github.io/tree/dev/src/app/shared/service) send/receive data used by the app. This data is represented by [models](https://github.com/bgw7/bgw7.github.io/tree/dev/src/app/shared/model) and presisted by [stores](https://github.com/bgw7/bgw7.github.io/tree/dev/src/app/shared/state).

Stores are immutable and represent the current state of the application data. Each time the state changes, there is an action with a payload of the data provided to the store.
```javascript
export type Action = {
    type: string;
    payload: any;
};
```

State of a store is updated with Reducers. Reducers are pure functions that always produce the nextState using current state and actions.
```javascript
export type Reducer<T> = (state: T, action: Action) => T;
const LOADED: Reducer<Chef> = (state: Chef, action: Action): Chef => ({ ...action.payload });
```

## Handling Live Data with Stores

[Event-Service](https://github.com/bgw7/bgw7.github.io/blob/dev/src/app/shared/service/cookbook-event.service.ts) makes an EventSource connection to receive push events from a back-end server. Any event from this service can affect any data model handled by the stores. To ensure every store remains current during the EventSource connection, the [Event-Store](https://github.com/bgw7/bgw7.github.io/blob/dev/src/app/shared/state/cookbook-event.store.ts) handles these side effects.

Models expected to be changed by the Events are defined as side effects.
```javascript
this.sideEffects = {
            Chef: {
                action: chef => Observable.of(<Action>{ type: 'UPDATED', payload: chef }),
                store: this.chefStore
            }
        };
```

Every event is handled by the store/action defined in the side effects.
```javascript
        this.pipe(
            takeWhile(() => this.alive),
            filter((event: CookbookEvent) => model in event),
            mergeMap(event => this.getAction(event, model)))
            .subscribe(this.sideEffects[model].store);
```

## Example Server
Run `npm run serve-local` along with this [java-spring application](https://github.com/bgw7/cookbook) to provide local back-end with supporting endpoints for this Angular application.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Cucumber Tests

The cucumber tests depend on a production build of static files in the /dist directory.
```bash
npm run ng build --prod
npm run cuke
```

[html-server.ts](https://github.com/bgw7/bgw7.github.io/blob/dev/features/support/html-server.ts) serves the static content on `http://localhost:4200/`

[hooks.ts](https://github.com/bgw7/bgw7.github.io/blob/dev/features/support/hooks.ts) opens a headless chromium browser using puppeteer.
Set **headless** to false to watch the tests run locally
```javascript
this.browser = await this.driver.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
```

## Local server

Run `npm run serve-local` serves static content on `http://localhost:4200/`. '/api' requests will be proxied to a json-server on `http://localhost:3000` using the [db.json data](https://github.com/bgw7/bgw7.github.io/blob/dev/db.json).

## Development server

Run `npm run serve-dev` serves static content on `http://localhost:4200/`. '/api' requests will be proxied to a public json-server at `http://my-json-server.typicode.com/bgw7/bgw7.github.io`.