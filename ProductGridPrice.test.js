import React from 'react';import { render, screen } from '@testing-library/react';import ProductGridPrice from '../components/ProductGridPrice';import '@testing-library/jest-dom/extend-expect';

test('renders Filtrar por precios', () => {{render(<ProductGridPrice/>);const searchedText = screen.getByText(/Filtrar por precios/i);expect(searchedText).toBeInTheDocument();}});
