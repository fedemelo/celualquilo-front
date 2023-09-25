import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsGridPrice from '../components/ProductsGridPrice';
import '@testing-library/jest-dom/extend-expect';


test('renders Filtrar por precios', () => {{
    render(<ProductsGridPrice/>);
    const searchedText = screen.getByText("Filtrar por precios");
    expect(searchedText).toBeInTheDocument();
}});

