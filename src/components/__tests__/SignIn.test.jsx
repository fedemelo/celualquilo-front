import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../SignIn';
import Visibility from '@mui/icons-material/Visibility';
import '@testing-library/jest-dom'

const renderWithReactIntl = (component, locale, pMessages) => {
    return render(<IntlProvider locale={locale} messages={pMessages}>
        {component}
    </IntlProvider>
    );
};


function getMessages(lang) {
    switch (lang) {
        case 'de':
            return require('../../languages/de.json');
        case 'fr':
            return require('../../languages/fr.json');
        case 'es':
            return require('../../languages/es.json');
        default:
            return require('../../languages/en.json');
    }
}

//Confirms that the SignIn component is rendered correctly
test('renders SignIn title', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <SignIn />
    </BrowserRouter>, "en", messages);
    const titleText = screen.getByTestId(messages["LogIn_Wellcome"]);
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveTextContent(messages["LogIn_Wellcome"]);

});


//Confirm that password changes visibility when clicking on the eye icon
test('hides password when clicking on the eye icon', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <SignIn />
    </BrowserRouter>, "en", messages);
    const passwordInput = screen.getByTestId("password").querySelector('input');
    const eyeIcon = screen.getByTestId("eyeIcon");
    expect(passwordInput.type).toBe("password"); 
    fireEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("text"); 
    fireEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("password");
});


//Confirm email and password are not empty
test('email and password are not empty', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <SignIn />
    </BrowserRouter>, "en", messages);
    const emailInput = screen.getByTestId("email");
    const passwordInput = screen.getByTestId("password");
    fireEvent.click(emailInput);
    fireEvent.click(passwordInput);
    const emailError = screen.getByTestId("emailError");
    const passwordError = screen.getByTestId("passwordError");
    expect(emailError).toHaveTextContent(messages["EmailNotEmpty"]);
    expect(passwordError).toHaveTextContent(messages["PasswordNotEmpty"]);
});

//Confirm email includes a @ symbol
test('email includes @ symbol', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <SignIn />
    </BrowserRouter>, "en", messages);
    const email = screen.getByTestId("email");
    const emailInput = email.querySelector('input');
    fireEvent.click(email);
    fireEvent.change(emailInput, { target: { value: 'test' } });
    const emailError = screen.getByTestId("emailError");
    expect(emailError).toHaveTextContent(messages["EmailContainsAtSymbol"]);
});

//Confirm password is at least 9 characters long
test('password is at least 9 characters long', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <SignIn />
    </BrowserRouter>, "en", messages);
    const password = screen.getByTestId("password");
    const passwordInput = password.querySelector('input');
    fireEvent.click(password);
    fireEvent.change(passwordInput, { target: { value: '12aA#' } });
    const passwordError = screen.getByTestId("passwordError");
    expect(passwordError).toHaveTextContent(messages["PasswordMinLength"]);
});