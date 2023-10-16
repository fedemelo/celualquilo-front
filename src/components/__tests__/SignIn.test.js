import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from '../Copyright';
import '@testing-library/jest-dom';

test('renders CeluAlquilo link', () => {
    render(<Copyright />);
    const searchedText = screen.getByText(/CeluAlquilo/i);
    expect(searchedText).toBeInTheDocument();
});