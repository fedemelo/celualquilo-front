import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from '../components/Review';
import '@testing-library/jest-dom/extend-expect';


test('renders ¡Dínos tu opinión!', () => {{
    render(<Review/>);
    const searchedText = screen.getByText("¡Dínos tu opinión!");
    expect(searchedText).toBeInTheDocument();
}});

