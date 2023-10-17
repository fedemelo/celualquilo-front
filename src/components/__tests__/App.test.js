import React from 'react';
import { screen } from '@testing-library/react';
import App from '../../App';
import '@testing-library/jest-dom';
import { renderWithReactIntl, getMessages } from '../TestHelper';

test('renders current year', () => {
    const messages = getMessages("en");
    renderWithReactIntl(
        <App />, "en", messages);
    const title = screen.getByText(/2023/i);
    expect(title).toBeInTheDocument();
}
);
