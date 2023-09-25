import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsGrid from '../components/ProductsGrid';
import '@testing-library/jest-dom/extend-expect';


test('renders Todos', () => {{
    render(<ProductsGrid/>);
    const searchedText = screen.getByText("Todos");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Populares', () => {{
    render(<ProductsGrid/>);
    const searchedText = screen.getByText("Populares");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Última Generación', () => {{
    render(<ProductsGrid/>);
    const searchedText = screen.getByText("Última Generación");
    expect(searchedText).toBeInTheDocument();
}});


test('renders En Descuento', () => {{
    render(<ProductsGrid/>);
    const searchedText = screen.getByText("En Descuento");
    expect(searchedText).toBeInTheDocument();
}});

