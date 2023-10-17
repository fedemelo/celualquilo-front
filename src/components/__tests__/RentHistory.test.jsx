import RentHistory from '../RentHistory';
import { test_texts, LANGS } from '../TestHelper';

test_texts(<RentHistory />, LANGS, [
    "RentHistory_Title",
    "RentHistory_ActiveRent",
    "RentHistory_RenewButton",
    "RentHistory_WriteButton",
]);