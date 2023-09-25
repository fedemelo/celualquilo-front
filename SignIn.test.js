import React from 'react';import { render, screen } from '@testing-library/react';import SignIn from '../components/SignIn';import '@testing-library/jest-dom/extend-expect';

test('renders Bienvenido de Vuelta', () => {{render(<SignIn/>);const searchedText = screen.getByText(/Bienvenido de Vuelta/i);expect(searchedText).toBeInTheDocument();}});

test('renders Alquila un celular fácil con CeluAlquilo', () => {{render(<SignIn/>);const searchedText = screen.getByText(/Alquila un celular fácil con CeluAlquilo/i);expect(searchedText).toBeInTheDocument();}});

test('renders Olvidaste tu contraseña?', () => {{render(<SignIn/>);const searchedText = screen.getByText(/Olvidaste tu contraseña?/i);expect(searchedText).toBeInTheDocument();}});

test('renders Nuevo Usuario?', () => {{render(<SignIn/>);const searchedText = screen.getByText(/Nuevo Usuario?/i);expect(searchedText).toBeInTheDocument();}});

test('renders Crear una cuenta', () => {{render(<SignIn/>);const searchedText = screen.getByText(/Crear una cuenta/i);expect(searchedText).toBeInTheDocument();}});
