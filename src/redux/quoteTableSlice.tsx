import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: "",
    selectedQuoteValue: '',
    quoteByIdData: [],
    selectedQuoteLoading: false,
    quoteData: [],
    listLoading: false
};

const getAllQuotesSlice = createSlice({
    name: 'getAllQuotes',
    initialState,
    reducers: {
        getAllQuotesPending(state, action: any) {
            state.listLoading = true;
            console.log("Login Pending Slice", action.payload)
        },
        getAllQuotesSuccess(state, action: any) {
            state.listLoading = false;
            state.quoteData = action.payload.paginatedResults
            console.log("quote success", action.payload.paginatedResults)
        },
        getAllQuotesFail(state, action: any) {
            state.listLoading = false;
            console.log("Login Pending Slice", action.payload)
        },
        searchQuotePending(state, action: any) {
            state.listLoading = true;
            state.searchValue = action.payload
            console.log("Login Pending Slice", action.payload)
        },
        searchQuoteSuccess(state, action: any) {
            state.listLoading = false;
            state.quoteData = action.payload
            console.log("Search success", action.payload)
        },
        searchQuoteFail(state, action: any) {
            state.listLoading = false;
            console.log("Login Pending Slice", action.payload)
        },
        viewQuotePending(state, action: any) {
            state.selectedQuoteLoading = true,
                state.selectedQuoteValue = action.payload;
        },
        viewQuoteSuccess(state, action: any) {
            state.selectedQuoteLoading = false;
            state.quoteByIdData = action.payload;

        },
        viewQuoteFail(state, action: any) {
            state.selectedQuoteLoading = false;
        }
    }
})



export const {
    getAllQuotesPending,
    getAllQuotesSuccess,
    getAllQuotesFail,
    searchQuoteSuccess, searchQuoteFail, searchQuotePending,
    viewQuotePending, viewQuoteSuccess, viewQuoteFail
} = getAllQuotesSlice.actions;
export default getAllQuotesSlice.reducer;