import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import FilterSection from '../FiltersSection';
import '@testing-library/jest-dom';

const renderWithReactIntl = (component, locale, messages) => {
    return render(
        <IntlProvider locale={locale} messages={messages}>
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


test('renders FilterSection in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "en", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders FilterSection in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "fr", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders FilterSection in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "es", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders FilterSection in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "de", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

// make the test renders title in english

test('renders title in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "en", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders title in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "fr", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders title in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "es", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders title in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "de", messages);
    const goBackText = screen.getByTestId('filter-section-title');
    expect(goBackText).toBeInTheDocument();
    expect(goBackText).toHaveTextContent(messages["Filters_Title"]);
});

test('renders ArrowDropDown in english', () => {
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "en", messages);
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in french', () => {
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "fr", messages);
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in spanish', () => {
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "es", messages);
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in german', () => {
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection />
    </BrowserRouter>, "de", messages);
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

// make the test renders ArrowDropUp in english after clicking filter-section-header

test('renders ArrowDropUp in english after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "en", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-up');
    expect(goBackText).toBeInTheDocument();
});



test('renders ArrowDropUp in french after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "fr", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-up');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropUp in spanish after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "es", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-up');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropUp in german after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "de", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-up');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in english after clicking filter-section-header twice', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "en", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in french after clicking filter-section-header twice', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "fr", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in spanish after clicking filter-section-header twice', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "es", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

test('renders ArrowDropDown in german after clicking filter-section-header twice', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "de", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-arrow-down');
    expect(goBackText).toBeInTheDocument();
});

// make the test renders filter-section-content in english after clicking filter-section-header

test('renders filter-section-content in english after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: true,huawei: false,xiaomi: false,}}
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "en", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-content');
    expect(goBackText).toBeInTheDocument();
});

test('renders filter-section-content in french after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: true,huawei: false,xiaomi: false,}}
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "fr", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-content');
    expect(goBackText).toBeInTheDocument();
});

test('renders filter-section-content in spanish after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: true,huawei: false,xiaomi: false,}}
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "es", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-content');
    expect(goBackText).toBeInTheDocument();
});

test('renders filter-section-content in german after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: true,huawei: false,xiaomi: false,}}
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "de", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-content');
    expect(goBackText).toBeInTheDocument();
});

// make the test renders filter-section-brand-samsung after clicking filter-section-header

test('renders filter-section-brand-samsung after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: true, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "en", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-brand-samsung');
    expect(goBackText).toBeInTheDocument();
});

test('renders filter-section-brand-apple after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: true, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("fr");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "fr", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-brand-apple');
    expect(goBackText).toBeInTheDocument();
});

test('renders filter-section-brand-huawei after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: true, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("es");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "es", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-brand-huawei');
    expect(goBackText).toBeInTheDocument();
});

test('renders filter-section-brand-xiaomi after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: true, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("de");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "de", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-brand-xiaomi');
    expect(goBackText).toBeInTheDocument();
});

// make the test renders filter-section-price-min after clicking filter-section-header

test('renders filter-section-price-min after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "en", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-price-min');
    expect(goBackText).toBeInTheDocument();
});

// make the test renders filter-section-price-max after clicking filter-section-header

test('renders filter-section-price-max after clicking filter-section-header', () => {
    const filtros = { PrecioMin : "", PrecioMax: "", Marcas: {samsung: false, apple: false,huawei: false,xiaomi: false,}}
    const messages = getMessages("en");
    renderWithReactIntl(<BrowserRouter>
        <FilterSection filtros={filtros} setFiltros={() => ""}/>
    </BrowserRouter>, "en", messages);
    fireEvent.click(screen.getByTestId('filter-section-header'));
    const goBackText = screen.getByTestId('filter-section-price-max');
    expect(goBackText).toBeInTheDocument();
});


