import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './i18n';
import { persistor, store } from './redux/store';

import App from './App';

import './scss/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={null}>
            <Provider store={store}>
                <BrowserRouter>
                    <PersistGate persistor={persistor}>
                        <App />
                    </PersistGate>
                </BrowserRouter>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
