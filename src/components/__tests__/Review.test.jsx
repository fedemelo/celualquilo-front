// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { IntlProvider } from 'react-intl';
// import Review from '../Review';
// import { BrowserRouter } from 'react-router-dom';
// import '@testing-library/jest-dom'


// const renderWithReactIntl = (component, locale, pMessages) => {
//     return render(<IntlProvider locale={locale} messages={pMessages}>
//         {component}
//     </IntlProvider>
//     );
// };


// function getMessages(lang) {
//     switch (lang) {
//         case 'de':
//             return require('../../languages/de.json');
//         case 'fr':
//             return require('../../languages/fr.json');
//         case 'es':
//             return require('../../languages/es.json');
//         default:
//             return require('../../languages/en.json');
//     }
// }

// function run_tests() {
//     const text_ids = ['Review_Title', 'PhoneDetail_LablelStock']
//     const langs = ['en', 'fr', 'es', 'de']
//     for (const lang of langs) {
//         for (const text_id of text_ids) {
//             test('renders Review in english', check_for_text(lang, text_id));
//         }
//     }
// }

// function check_for_text(lang, text_id) {
//     return () => {
//         const messages = getMessages(lang);
//         renderWithReactIntl(<BrowserRouter>
//             <Review />
//         </BrowserRouter>, lang, messages);
//         const goBackText = screen.getByTestId(text_id);
//         expect(goBackText).toBeInTheDocument();
//         expect(goBackText).toHaveTextContent(messages[text_id]);
//     }
// }

// run_tests();