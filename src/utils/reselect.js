import { createSelectorCreator, defaultMemoize } from 'reselect';
import { is } from 'immutable';

function isEqual(a, b) {
    return is(a, b);
}

const createImmutableSelector = createSelectorCreator(defaultMemoize, isEqual);

export default createImmutableSelector;
