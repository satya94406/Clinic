import { configureStore } from "@reduxjs/toolkit";
import submitSliceReducer from './SubmitSlice'
const AppStore = configureStore({
     reducer:{
        app:submitSliceReducer
     }
});

export default AppStore;