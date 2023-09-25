import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom/extend-expect';

test('renders coypright', () => {
    render(<Footer/>);
    const searchedText = screen.getByText(/Copyright/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders CeluAlquilo link', () => {
    render(<Footer/>);
    const searchedText = screen.getByText(/CeluAlquilo/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders current year', () => {
    render(<Footer/>);
    const searchedText = screen.getByText(/2023/i);
    expect(searchedText).toBeInTheDocument();
});