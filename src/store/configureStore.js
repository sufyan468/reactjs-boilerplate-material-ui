import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import userReducer from './slices/user.slice';
import snackbarReducer from './slices/snackbar.slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    user: userReducer,
    snackbar: snackbarReducer,
});

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);

export default store;
