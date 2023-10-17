import React from 'react';
import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

export const LANGS = ['en', 'de', 'fr', 'es'];

export function test_texts(Component, langs, text_ids) {
    // Generates tests for each language and text_id

    for (const lang of langs) {
        for (const text_id of text_ids) {
            test(`renders ${text_id} in ${lang}`, test_single_text(Component, lang, text_id));
        }
    }
}


function test_single_text(Component, lang, text_id) {
    return () => {
        const messages = getMessages(lang);
        renderWithReactIntl(<BrowserRouter>
            {Component}
        </BrowserRouter>, lang, messages);

        expect(screen.getAllByText(messages[text_id])).toBeTruthy();
    }
}


export function renderWithReactIntl(Component, locale, pMessages) {
    return render(<IntlProvider locale={locale} messages={pMessages}>
        {Component}
    </IntlProvider>
    );
};


export function getMessages(lang) {
    switch (lang) {
        case 'de':
            return require('../languages/de.json');
        case 'fr':
            return require('../languages/fr.json');
        case 'es':
            return require('../languages/es.json');
        default:
            return require('../languages/en.json');
    }
}







