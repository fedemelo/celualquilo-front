import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

test('renders iPhone name', () => {
    render(<Header />);
    const searchedText = screen.getByText(/iPhone/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders Huawei name', () => {
    render(<Header />);
    const searchedText = screen.getByText(/Huawei/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders Samsung name', () => {
    render(<Header />);
    const searchedText = screen.getByText(/Samsung/i);
    expect(searchedText).toBeInTheDocument();
});


test('renders Xiaomi name', () => {
    render(<Header />);
    const searchedText = screen.getByText(/Xiaomi/i);
    expect(searchedText).toBeInTheDocument();
});