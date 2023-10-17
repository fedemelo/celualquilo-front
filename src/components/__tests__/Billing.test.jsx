import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Billing from '../Billing';
import '@testing-library/jest-dom'
import { renderWithReactIntl, getMessages } from '../TestHelper';

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
});

