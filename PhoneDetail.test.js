import React from 'react';import { render, screen } from '@testing-library/react';import PhoneDetail from '../components/PhoneDetail';import '@testing-library/jest-dom/extend-expect';

test('renders Alquilar', () => {{render(<PhoneDetail/>);const searchedText = screen.getByText(/Alquilar/i);expect(searchedText).toBeInTheDocument();}});

test('renders Reseñas de otros usuarios', () => {{render(<PhoneDetail/>);const searchedText = screen.getByText(/Reseñas de otros usuarios/i);expect(searchedText).toBeInTheDocument();}});
