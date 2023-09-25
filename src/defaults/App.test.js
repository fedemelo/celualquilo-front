import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders coypright', () => {
    render(<App />);
    const searchedText = screen.getByText(/Copyright/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders CeluAlquilo link', () => {
    render(<App />);
    const searchedText = screen.getByText(/CeluAlquilo/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders current year', () => {
    render(<App />);
    const searchedText = screen.getByText(/2023/i);
    expect(searchedText).toBeInTheDocument();
});