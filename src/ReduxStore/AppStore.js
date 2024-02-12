import { configureStore } from "@reduxjs/toolkit";
import submitSliceReducer from './PatientSlice'
const AppStore = configureStore({
     reducer:{
        app:submitSliceReducer
     }
});

export default AppStore;