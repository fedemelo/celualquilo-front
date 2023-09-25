import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';
import '@testing-library/jest-dom/extend-expect';


test('renders 1', () => {{
    render(<Pagination/>);
    const searchedText = screen.getByText("1");
    expect(searchedText).toBeInTheDocument();
}});


test('renders 2', () => {{
    render(<Pagination/>);
    const searchedText = screen.getByText("2");
    expect(searchedText).toBeInTheDocument();
}});


test('renders 3', () => {{
    render(<Pagination/>);
    const searchedText = screen.getByText("3");
    expect(searchedText).toBeInTheDocument();
}});


test('renders 4', () => {{
    render(<Pagination/>);
    const searchedText = screen.getByText("4");
    expect(searchedText).toBeInTheDocument();
}});


test('renders 5', () => {{
    render(<Pagination/>);
    const searchedText = screen.getByText("5");
    expect(searchedText).toBeInTheDocument();
}});

