import React from 'react';
import { render, screen } from '@testing-library/react';
import RentDetail from '../components/RentDetail';
import '@testing-library/jest-dom/extend-expect';


test('renders Detalles del Alquiler', () => {{
    render(<RentDetail/>);
    const searchedText = screen.getByText("Detalles del Alquiler");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Continuar pago', () => {{
    render(<RentDetail/>);
    const searchedText = screen.getByText("Continuar pago");
    expect(searchedText).toBeInTheDocument();
}});

