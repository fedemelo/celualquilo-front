import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';
import '@testing-library/jest-dom'
import { renderWithReactIntl, getMessages } from '../TestHelper';

test('renders General title Footer in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "en", messages);
    const title = screen.getByTestId("General");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_General_Title"]);

});

test('renders General title Footer in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "es", messages);
    const title = screen.getByTestId(messages["Footer_General_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_General_Title"]);

});

test('renders General title Footer in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "fr", messages);
    const title = screen.getByTestId(messages["Footer_General_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_General_Title"]);

});

test('renders General title Footer in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "de", messages);
    const title = screen.getByTestId(messages["Footer_General_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_General_Title"]);

}
);

test('renders Legal Title Footer in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "en", messages);
    const title = screen.getByTestId(messages["Footer_Legal_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Legal_Title"]);

});

test('renders Legal Title Footer in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "es", messages);
    const title = screen.getByTestId(messages["Footer_Legal_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Legal_Title"]);

});

test('renders Legal Title Footer in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "fr", messages);
    const title = screen.getByTestId(messages["Footer_Legal_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Legal_Title"]);

}
);

test('renders Legal Title Footer in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "de", messages);
    const title = screen.getByTestId(messages["Footer_Legal_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Legal_Title"]);

}
);

test('renders Contact Title Footer in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "en", messages);
    const title = screen.getByTestId(messages["Footer_Contact_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Contact_Title"]);

});

test('renders Contact Title Footer in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "es", messages);
    const title = screen.getByTestId(messages["Footer_Contact_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Contact_Title"]);

}
);

test('renders Contact Title Footer in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "fr", messages);
    const title = screen.getByTestId(messages["Footer_Contact_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Contact_Title"]);

}
);

test('renders Contact Title Footer in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <Footer />
    </BrowserRouter>, "de", messages);
    const title = screen.getByTestId(messages["Footer_Contact_Title"]);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(messages["Footer_Contact_Title"]);

}
);






