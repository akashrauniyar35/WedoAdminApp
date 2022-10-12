import { createSlice } from '@reduxjs/toolkit'





export interface initialState {

    searchValue: string,
    sealectedQuoteValue: string,
    quotePageData: {
        _id: string,
        email: string,
        name: string,
        phone: string,
        quoteReference: string,
        quoteStatus: string,
        service: string,
        subtotal: number,
    },
    quoteData: [],
    quoteByIdData: [],
    listLoading: boolean,
    selectedQuoteLoading: boolean,
    selectedQuoteValue: string,

}

const initialState: initialState = {
    searchValue: "",
    selectedQuoteValue: '',
    quotePageData: [],
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
            state.searchValue = ""
            console.log("Login Pending Slice", action.payload)
        },
        getAllQuotesSuccess(state, action: any) {
            state.listLoading = false;
            state.quotePageData = action.payload.paginatedResults
            return state.quoteData = state.quotePageData,

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
            // state.quotePageData = action.payload
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