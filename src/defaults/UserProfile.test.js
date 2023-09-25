import React from 'react';
import { render, screen } from '@testing-library/react';
import UserProfile from '../components/UserProfile';
import '@testing-library/jest-dom/extend-expect';


test('renders Correo:', () => {{
    render(<UserProfile/>);
    const searchedText = screen.getByText("Correo:");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Ver historial', () => {{
    render(<UserProfile/>);
    const searchedText = screen.getByText("Ver historial");
    expect(searchedText).toBeInTheDocument();
}});


test('renders Ver favoritos', () => {{
    render(<UserProfile/>);
    const searchedText = screen.getByText("Ver favoritos");
    expect(searchedText).toBeInTheDocument();
}});

