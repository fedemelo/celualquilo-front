import React from 'react';
import { render, screen } from '@testing-library/react';
import Billing from '../components/Billing';
import '@testing-library/jest-dom/extend-expect';


test('renders Dirección de facturación', () => {{
    render(<Billing/>);
    const searchedText = screen.getByText("Dirección de facturación");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Método de Pago', () => {{
    render(<Billing/>);
    const searchedText = screen.getByText("Método de Pago");
    expect(searchedText).toBeInTheDocument();
}});

