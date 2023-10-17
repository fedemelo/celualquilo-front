import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PhoneCard from '../PhoneCard';
import '@testing-library/jest-dom'
import { renderWithReactIntl, getMessages } from '../TestHelper';

//Confirms that the PhoneCard component is rendered correctly
test('renders PhoneCard title', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <PhoneCard name={"Celular Prueba"} image={"https://www.un.org/pga/73/wp-content/uploads/sites/53/2018/09/Dummy-image-1.jpg"} cost={3223} rating={4.5} />
    </BrowserRouter>, "en", messages);
    const titleText = screen.getByTestId("nombreCelular");
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveTextContent("Celular Prueba");

});

test('renders PhoneCard price', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <PhoneCard name={"Celular Prueba"} image={"https://www.un.org/pga/73/wp-content/uploads/sites/53/2018/09/Dummy-image-1.jpg"} cost={3223} rating={4.5} />
    </BrowserRouter>, "en", messages);
    const titleText = screen.getByTestId("precioCelular");
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveTextContent("3223 USD / dia");
});

test('renders PhoneCard rating', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <PhoneCard name={"Celular Prueba"} image={"https://www.un.org/pga/73/wp-content/uploads/sites/53/2018/09/Dummy-image-1.jpg"} cost={3223} rating={4.5} />
    </BrowserRouter>, "en", messages);
    const titleText = screen.getByTestId("ratingCelular");
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveTextContent("4.5");
});

//Confirm that the favorite icon changes color when clicked
test('favorite icon changes color when clicked', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <PhoneCard name={"Celular Prueba"} image={"https://www.un.org/pga/73/wp-content/uploads/sites/53/2018/09/Dummy-image-1.jpg"} cost={3223} rating={4.5} />
    </BrowserRouter>, "en", messages);
    const favoriteIcon = screen.getByTestId("favoriteIcon");
    fireEvent.click(favoriteIcon);
    expect(favoriteIcon).toHaveStyle("color: #9E30FF");
});