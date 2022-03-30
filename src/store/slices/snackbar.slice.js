import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        open: false,
        message: '',
        type: '',
    },
    reducers: {
        showSnackBar(state, action) {
            state.open = true;
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        hideSnackBar(state, action) {
            state.open = false;
            state.message = '';
            state.type = '';
        },
    },
});

export const { showSnackBar, hideSnackBar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
