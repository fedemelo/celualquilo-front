import React from 'react';import { render, screen } from '@testing-library/react';import UserProfile from '../components/UserProfile';import '@testing-library/jest-dom/extend-expect';

test('renders Correo:Ver reservas activas', () => {{render(<UserProfile/>);const searchedText = screen.getByText(/Correo:Ver reservas activas/i);expect(searchedText).toBeInTheDocument();}});

test('renders Ver reservas pasadas', () => {{render(<UserProfile/>);const searchedText = screen.getByText(/Ver reservas pasadas/i);expect(searchedText).toBeInTheDocument();}});
