import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    loading: false,
    searchValue: '',
    quoteDate: '',
    quoteTime: '',
};

const addQuoteSlice = createSlice({
    name: 'getAllQuotes',
    initialState,
    reducers: {
        searchQuotePending(state, action: any) {
            state.loading = true;
            state.searchValue = action.payload
            console.log("Login Pending Slice", action.payload)
        },
        searchQuoteSuccess(state, action: any) {
            state.loading = false;
            console.log("Search success", action.payload)
        },
        searchQuoteFail(state, action: any) {
            state.loading = false;
            console.log("search success api", action.payload)
        },
        quoteDatePickPending(state, action: any) {

        },
        quoteDatePickSuccess(state, action) {
            console.log("date picked", action.payload)
            state.quoteDate = action.payload.toString()
        },
        quoteDatePickFail(state, action: any) {
            console.log("err", action.payload)
        },
        quoteTimePickPending(state, action: any) {

        },
        quoteTimePickSuccess(state, action) {
            console.log("time picked", action.payload)
            state.quoteTime = action.payload.toString()
        },
        quoteTimePickFail(state, action: any) {
            console.log("err", action.payload)
        },



    }
})



export const {
    searchQuotePending,
    searchQuoteSuccess,
    searchQuoteFail,
    quoteDatePickPending,
    quoteDatePickSuccess,
    quoteDatePickFail,
    quoteTimePickPending,
    quoteTimePickSuccess,
    quoteTimePickFail

} = addQuoteSlice.actions;
export default addQuoteSlice.reducer;