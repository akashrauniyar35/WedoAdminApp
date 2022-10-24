import { createSlice } from '@reduxjs/toolkit'





export interface initialState {

    searchValue: string,
    sealectedJobValue: string,
    JobPageData: {
        _id: string,
        email: string,
        name: string,
        phone: string,
        jobReference: string,
        jobtatus: string,
        service: string,
        subtotal: number,
    },
    jobData: [],
    jobByIdData: [],
    jobPageData: [],
    searchResults: [],
    listLoading: boolean,
    selectedJobLoading: boolean,
    selectedJobValue: string,

}

const initialState: initialState = {
    searchValue: "",
    searchResults: [],
    selectedJobValue: '',
    jobPageData: [],
    jobByIdData: [],
    selectedJobLoading: false,
    jobData: [],
    listLoading: false
};




const getAllJobSlice = createSlice({
    name: 'getAllJob',
    initialState,
    reducers: {
        getAllJobPending(state, action: any) {
            state.listLoading = true;
            state.searchValue = ""
            console.log("Login Pending Slice", action.payload)
        },
        getAllJobSuccess(state, action: any) {
            state.listLoading = false;
            state.jobData = action.payload.paginatedResults

            console.log("Job success", action.payload.paginatedResults)
        },
        getAllJobFail(state, action: any) {
            state.listLoading = false;
            console.log("Login Pending Slice", action.payload)
        },
        searchJobPending(state, action: any) {
            state.listLoading = true;
            state.searchValue = action.payload
            console.log("Login Pending Slice", action.payload)
        },
        searchJobuccess(state, action: any) {
            state.listLoading = false;
            // state.JobPageData = action.payload
            state.searchResults = action.payload
            console.log("Search success", action.payload)
        },
        searchJobFail(state, action: any) {
            state.listLoading = false;
            console.log("Login Pending Slice", action.payload)
        },
        viewJobPending(state, action: any) {
            state.selectedJobLoading = true,
                state.selectedJobValue = action.payload;
        },
        viewJobSuccess(state, action: any) {
            console.log('success job view')
            state.selectedJobLoading = false;
            state.jobByIdData = action.payload;

        },
        viewJobFail(state, action: any) {
            state.selectedJobLoading = false;
        }
    }
})



export const {
    getAllJobPending,
    getAllJobSuccess,
    getAllJobFail,
    searchJobuccess, searchJobFail, searchJobPending,
    viewJobPending, viewJobSuccess, viewJobFail
} = getAllJobSlice.actions;
export default getAllJobSlice.reducer;