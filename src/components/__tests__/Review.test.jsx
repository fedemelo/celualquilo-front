import Review from '../Review';
import { test_texts, LANGS } from '../TestHelper';

test_texts(<Review />, LANGS, [
    "Review_Title",
]);