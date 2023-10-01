import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { IntlProvider } from 'react-intl';

// import App from './AppHU';
import * as serviceWorkerRegistration from './defaults/serviceWorkerRegistration';

const lang = navigator.language.split(/[-_]/)[0];
const messages = getMessages(lang);

function getMessages(lang) {
    switch (lang) {
        case 'de':
            return require('./languages/de.json');
        case 'fr':
            return require('./languages/fr.json');
        case 'es':
            return require('./languages/es.json');
        default:
            return require('./languages/en.json');
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <IntlProvider locale={lang} messages={messages}>
            <App />
        </IntlProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
