import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import CreateAccount from '../CreateAccount';
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

//Confirms that the Register component is rendered correctly
test('renders Register title', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const titleText = screen.getByTestId(messages["Register_CreateAcc"]);
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveTextContent(messages["Register_CreateAcc"]);

});

//Confirm that name is properly written(is not empty and is has at least 2 characters)
test('name is not empty', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const name = screen.getByTestId("name");
    const nameInput = name.querySelector('input');
    fireEvent.click(name);
    const nameEmpty = screen.getByTestId("nameError");
    expect(nameEmpty).toHaveTextContent(messages["No_Empty_Name"]);
});

test('name has at least 2 characters', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const name = screen.getByTestId("name");
    const nameInput = name.querySelector('input');
    fireEvent.click(name);
    fireEvent.change(nameInput, { target: { value: 'a' } });
    const nameError = screen.getByTestId("nameError");
    expect(nameError).toHaveTextContent(messages["Len_Above_2"]);
});

//Confirm that password changes visibility when clicking on the eye icon
test('hides password when clicking on the eye icon', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const passwordInput = screen.getByTestId("password").querySelector('input');
    const eyeIcon = screen.getByTestId("eyeIconPassword");
    expect(passwordInput.type).toBe("password"); 
    fireEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("text"); 
    fireEvent.click(eyeIcon);
    expect(passwordInput.type).toBe("password");
});

//Confirm that verify password changes visibility when clicking on the eye icon
test('hides verify password when clicking on the eye icon', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const passwordInput = screen.getByTestId("verifyPassword").querySelector('input');
    const eyeIcon = screen.getByTestId("eyeIconVerifyPassword");
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
        <CreateAccount />
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

//Confirm verify password is not empty
test('verify password is not empty', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const verifyPasswordInput = screen.getByTestId("verifyPassword");
    fireEvent.click(verifyPasswordInput);
    const verifyPasswordError = screen.getByTestId("verifyPasswordError");
    expect(verifyPasswordError).toHaveTextContent(messages["RewritePassword"]);
});

//Confirm email includes a @ symbol
test('email includes @ symbol', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
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
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const password = screen.getByTestId("password");
    const passwordInput = password.querySelector('input');
    fireEvent.click(password);
    fireEvent.change(passwordInput, { target: { value: '12aA#' } });
    const passwordError = screen.getByTestId("passwordError");
    expect(passwordError).toHaveTextContent(messages["PasswordMinLength"]);
});

//Confirm verify password matches password
test('verify password matches password', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <CreateAccount />
    </BrowserRouter>, "en", messages);
    const password = screen.getByTestId("password");
    const verifyPassword = screen.getByTestId("verifyPassword");
    const passwordInput = password.querySelector('input');
    const verifyPasswordInput = verifyPassword.querySelector('input');
    fireEvent.click(password);
    fireEvent.click(verifyPassword);
    fireEvent.change(passwordInput, { target: { value: '12aA#1234' } });
    fireEvent.change(verifyPasswordInput, { target: { value: '12aA#123' } });
    const verifyPasswordError = screen.getByTestId("verifyPasswordError");
    expect(verifyPasswordError).toHaveTextContent(messages["PasswordsDoNotMatch"]);
});