import React from 'react';import { render, screen } from '@testing-library/react';import ProductsGrid from '../components/ProductsGrid';import '@testing-library/jest-dom/extend-expect';

test('renders Todos', () => {{render(<ProductsGrid/>);const searchedText = screen.getByText(/Todos/i);expect(searchedText).toBeInTheDocument();}});

test('renders Populares', () => {{render(<ProductsGrid/>);const searchedText = screen.getByText(/Populares/i);expect(searchedText).toBeInTheDocument();}});

test('renders Última Generación', () => {{render(<ProductsGrid/>);const searchedText = screen.getByText(/Última Generación/i);expect(searchedText).toBeInTheDocument();}});

test('renders En Descuento', () => {{render(<ProductsGrid/>);const searchedText = screen.getByText(/En Descuento/i);expect(searchedText).toBeInTheDocument();}});

test('renders Nuestros Productos', () => {{render(<ProductsGrid/>);const searchedText = screen.getByText(/Nuestros Productos/i);expect(searchedText).toBeInTheDocument();}});
