import Favourites from '../Favourites';
import { test_texts, LANGS } from '../TestHelper';

test_texts(<Favourites />, LANGS, [
    "Favourites_Title",
    "Rent",
    "BreadcrumbMiAccount"
]);