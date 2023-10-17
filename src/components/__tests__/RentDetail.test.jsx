import React from 'react';
import { screen } from '@testing-library/react';
import RentDetail from '../RentDetail';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'
import { renderWithReactIntl, getMessages } from '../TestHelper';


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