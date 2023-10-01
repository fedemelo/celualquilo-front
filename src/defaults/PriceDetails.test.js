import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import { render, screen } from '@testing-library/react';
import PriceDetails from '../components/PriceDetails';
import '@testing-library/jest-dom/extend-expect';


test('renders Detalle del precio de alquiler', () => {
    {
        render(<PriceDetails />);
        const searchedText = screen.getByText("Detalle del precio de alquiler");
        expect(searchedText).toBeInTheDocument();
    }
});


// test('renders Precio por', () => {{
//     render(<PriceDetails/>);
//     const searchedText = screen.getByText("Precio por");
//     expect(searchedText).toBeInTheDocument();
// }});


test('renders Impuestos 19%', () => {
    {
        render(<PriceDetails />);
        const searchedText = screen.getByText("Impuestos 19%");
        expect(searchedText).toBeInTheDocument();
    }
});


test('renders Total + Impuestos', () => {
    {
        render(<PriceDetails />);
        const searchedText = screen.getByText("Total + Impuestos");
        expect(searchedText).toBeInTheDocument();
    }
});


