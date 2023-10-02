import React from 'react';
import { render, screen } from '@testing-library/react';
import Copyright from '../components/Copyright';
import '@testing-library/jest-dom/extend-expect';

test('renders current year', () => {
    render(<Copyright />);
    const searchedText = screen.getByText(/2023/i);
    expect(searchedText).toBeInTheDocument();
});