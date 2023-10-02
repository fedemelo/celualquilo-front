import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from '../components/Copyright';
import '@testing-library/jest-dom/extend-expect';

test('renders CeluAlquilo link', () => {
    render(<Copyright />);
    const searchedText = screen.getByText(/CeluAlquilo/i);
    expect(searchedText).toBeInTheDocument();
});