import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

import authenticationSlice from './authenticationSlice';
import jobSlice from './jobSlice';
// import quoteSearchSlice from './extraSlice';
import logger from 'redux-logger'
import addJobSlice from './addJobSlice';


export default configureStore({
    reducer: {
        authReducer: authenticationSlice,
        jobReducer: jobSlice,
        addJobReducer: addJobSlice
        // quoteSearchReducer: quoteSearchSlice
    },
    middleware: [logger],
})

