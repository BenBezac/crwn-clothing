import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={null}>
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
