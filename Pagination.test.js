import React from 'react';import { render, screen } from '@testing-library/react';import Pagination from '../components/Pagination';import '@testing-library/jest-dom/extend-expect';

test('renders 1', () => {{render(<Pagination/>);const searchedText = screen.getByText(/1/i);expect(searchedText).toBeInTheDocument();}});

test('renders 2', () => {{render(<Pagination/>);const searchedText = screen.getByText(/2/i);expect(searchedText).toBeInTheDocument();}});

test('renders 3', () => {{render(<Pagination/>);const searchedText = screen.getByText(/3/i);expect(searchedText).toBeInTheDocument();}});

test('renders 4', () => {{render(<Pagination/>);const searchedText = screen.getByText(/4/i);expect(searchedText).toBeInTheDocument();}});

test('renders 5', () => {{render(<Pagination/>);const searchedText = screen.getByText(/5/i);expect(searchedText).toBeInTheDocument();}});
