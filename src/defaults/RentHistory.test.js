import React from 'react';
import { render, screen } from '@testing-library/react';
import RentHistory from '../components/RentHistory';
import '@testing-library/jest-dom/extend-expect';


test('renders Historial de Alquileres', () => {{
    render(<RentHistory/>);
    const searchedText = screen.getByText("Historial de Alquileres");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Alquileres Activos', () => {{
    render(<RentHistory/>);
    const searchedText = screen.getByText("Alquileres Activos");
    expect(searchedText).toBeInTheDocument();
}});

