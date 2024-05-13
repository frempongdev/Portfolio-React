import { configureStore } from "@reduxjs/toolkit";
import projectReducer from '../redux/projects/projectSlice'

const store = configureStore({
    reducer: {
        project: projectReducer
    }
})

export default store;