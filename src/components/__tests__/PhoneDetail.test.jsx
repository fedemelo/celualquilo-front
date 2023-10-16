import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import PhoneDetail from '../PhoneDetail';
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

test('renders PhoneDetail in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <PhoneDetail />
    </BrowserRouter>, "en", messages);
    const goBackText = screen.getByTestId('go-back-text');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["PhoneDetail_LablelDetail"]);

}
);

test('renders PhoneDetail in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <PhoneDetail />
    </BrowserRouter>, "fr", messages);
    const goBackText = screen.getByTestId('go-back-text');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["PhoneDetail_LablelDetail"]);
}
);

test('renders PhoneDetail in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <PhoneDetail />
    </BrowserRouter>, "es", messages);
    const goBackText = screen.getByTestId('go-back-text');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["PhoneDetail_LablelDetail"]);
});

test('renders PhoneDetail in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <PhoneDetail />
    </BrowserRouter>, "de", messages);
    const goBackText = screen.getByTestId('go-back-text');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["PhoneDetail_LablelDetail"]);
});


