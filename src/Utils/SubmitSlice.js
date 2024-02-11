import { createSlice } from "@reduxjs/toolkit";

const Submit_Slice = createSlice({
    name:"Submit",
    initialState:{
        PatientName:"",
        DoctorName:"",
        ClinicName:"",
        Date:"",
        Time:"",
        Mobile_code:"",
        Mobile_Number:""
    },
    reducers:{
        PatientName:(state,action)=>{
        state.PatientName = action.payload
    },
        DoctorName:(state,action)=>{
        state.DoctorName = action.payload
    },
        ClinicName:(state,action)=>{
        state.ClinicName = action.payload
    },
        Date:(state,action)=>{
        state. Date = action.payload
    },
        Time:(state,action)=>{
        state.Time = action.payload
    },
        Mobile_code:(state,action)=>{
        state.Mobile_code = action.payload
    },
        Mobile_Number:(state,action)=>{
        state. Mobile_Number = action.payload
    }
}
})

export const { PatientName, DoctorName,ClinicName, Date,Time, Mobile_code,Mobile_Number} = Submit_Slice.actions;
export default Submit_Slice.reducer;
