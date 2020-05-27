import {applyMiddleware, createStore, Middleware, Store } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import {Persistor} from 'redux-persist/es/types';

const middlewares: Array<Middleware> = [logger];

export const store: Store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
export const persistor: Persistor = persistStore(store);
