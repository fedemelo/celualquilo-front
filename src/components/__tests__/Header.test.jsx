import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom'


const renderWithReactIntl = (component, locale, pMessages) => {
    return render(<IntlProvider locale={locale} messages={pMessages}>
        {component}
    </IntlProvider>
    );
};


function getMessages(lang) {
    switch (lang) {
        case 'de':
            return require('../../languages/de.json');
        case 'fr':
            return require('../../languages/fr.json');
        case 'es':
            return require('../../languages/es.json');
        default:
            return require('../../languages/en.json');
    }
}

test('renders phone brands in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <Header/>
    </BrowserRouter>, "en", messages);
    const iPhone = screen.getByTestId('iPhone');
    const Huawei = screen.getByTestId('Huawei');
    const Samsung = screen.getByTestId('Samsung');
    const Xiaomi = screen.getByTestId('Xiaomi');
    expect(iPhone).toBeInTheDocument();
    expect(Huawei).toBeInTheDocument();
    expect(Samsung).toBeInTheDocument();
    expect(Xiaomi).toBeInTheDocument();

});

test('renders phone brands in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <Header/>
    </BrowserRouter>, "fr", messages);
    const iPhone = screen.getByTestId('iPhone');
    const Huawei = screen.getByTestId('Huawei');
    const Samsung = screen.getByTestId('Samsung');
    const Xiaomi = screen.getByTestId('Xiaomi');
    expect(iPhone).toBeInTheDocument();
    expect(Huawei).toBeInTheDocument();
    expect(Samsung).toBeInTheDocument();
    expect(Xiaomi).toBeInTheDocument();
});

test('renders phone brands in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <Header/>
    </BrowserRouter>, "es", messages);
    const iPhone = screen.getByTestId('iPhone');
    const Huawei = screen.getByTestId('Huawei');
    const Samsung = screen.getByTestId('Samsung');
    const Xiaomi = screen.getByTestId('Xiaomi');
    expect(iPhone).toBeInTheDocument();
    expect(Huawei).toBeInTheDocument();
    expect(Samsung).toBeInTheDocument();
    expect(Xiaomi).toBeInTheDocument();
});

test('renders phone brands in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <Header/>
    </BrowserRouter>, "de", messages);
    const iPhone = screen.getByTestId('iPhone');
    const Huawei = screen.getByTestId('Huawei');
    const Samsung = screen.getByTestId('Samsung');
    const Xiaomi = screen.getByTestId('Xiaomi');
    expect(iPhone).toBeInTheDocument();
    expect(Huawei).toBeInTheDocument();
    expect(Samsung).toBeInTheDocument();
    expect(Xiaomi).toBeInTheDocument();
}
);
