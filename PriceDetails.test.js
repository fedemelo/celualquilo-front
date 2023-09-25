import React from 'react';import { render, screen } from '@testing-library/react';import PriceDetails from '../components/PriceDetails';import '@testing-library/jest-dom/extend-expect';

test('renders Detalle del precio de alquiler', () => {{render(<PriceDetails/>);const searchedText = screen.getByText(/Detalle del precio de alquiler/i);expect(searchedText).toBeInTheDocument();}});

test('renders Precio por', () => {{render(<PriceDetails/>);const searchedText = screen.getByText(/Precio por/i);expect(searchedText).toBeInTheDocument();}});

test('renders días', () => {{render(<PriceDetails/>);const searchedText = screen.getByText(/días/i);expect(searchedText).toBeInTheDocument();}});

test('renders Impuestos 19%', () => {{render(<PriceDetails/>);const searchedText = screen.getByText(/Impuestos 19%/i);expect(searchedText).toBeInTheDocument();}});

test('renders Total + Impuestos/dia', () => {{render(<PriceDetails/>);const searchedText = screen.getByText(/Total + Impuestos/dia/i);expect(searchedText).toBeInTheDocument();}});
