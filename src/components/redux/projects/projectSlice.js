import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberClicked: null
}

const projectSlice = createSlice({
    name : 'projectClick',
    initialState,
    reducers: {
        openProject : (state,{payload}) => ({...state, numberClicked:payload}),
        closeProject : (state) => ({...state, numberClicked:null}),
    },
}) 

export const {openProject, closeProject} = projectSlice.actions;
export default projectSlice.reducer;