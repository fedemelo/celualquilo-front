import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import RentDetail from '../RentDetail';
import { BrowserRouter } from 'react-router-dom';
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


test('renders RentDetail in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <RentDetail />
    </BrowserRouter>, "en", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);

});

test('renders RentDetail in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <RentDetail />
    </BrowserRouter>, "fr", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);
});

test('renders RentDetail in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <RentDetail />
    </BrowserRouter>, "es", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);
});

test('renders RentDetail in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <RentDetail />
    </BrowserRouter>, "de", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);
}
);