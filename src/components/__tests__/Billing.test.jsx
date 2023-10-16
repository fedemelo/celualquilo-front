import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Billing from '../Billing';
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

test('renders Billing in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <Billing />
    </BrowserRouter>, "en", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);

});

test('renders Billing in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <Billing />
    </BrowserRouter>, "fr", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);
});

test('renders Billing in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <Billing />
    </BrowserRouter>, "es", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);
});

test('renders Billing in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <Billing />
    </BrowserRouter>, "de", messages);
    const goBackText = screen.getByTestId('RentDetail_PriceInfo_Title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["RentDetail_PriceInfo_Title"]);
}   );

