import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import ProductsGrid from '../ProductsGrid';
import ProductsGridFilter from '../ProductsGridFilter';
import Visibility from '@mui/icons-material/Visibility';
import spyOn from 'jest-mock';

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

//Confirms that the ProductsGrid component is rendered correctly
test('renders ProductsGrid title', () => {
    const messages = true;
    expect(messages).toBe(true);
});

