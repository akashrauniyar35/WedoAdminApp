import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

import authenticationSlice from './authenticationSlice';
import bookingTableSlice from './quoteTableSlice';
// import quoteSearchSlice from './extraSlice';
import logger from 'redux-logger'


export default configureStore({
    reducer: {
        authReducer: authenticationSlice,
        quoteTableReducer: bookingTableSlice,
        // quoteSearchReducer: quoteSearchSlice
    },
    middleware: [logger],
})

