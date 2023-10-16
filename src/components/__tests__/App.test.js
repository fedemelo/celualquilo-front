import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import '@testing-library/jest-dom';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';


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

test ('renders current year', () => {
    const messages = getMessages("en");
    renderWithReactIntl(
        <App />, "en", messages);
    const title = screen.getByText(/2023/i);
    expect(title).toBeInTheDocument();
}
);
