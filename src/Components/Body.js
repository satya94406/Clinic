import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { hospital_names ,times,mobile_code ,doctor_Names} from '../Utils/constants';
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ClinicName, Date, DoctorName, Mobile_Number, Mobile_code, PatientName, Time } from '../Utils/SubmitSlice';

const Body = () => {
    const[selected , setSelected] = useState("");
    const[Doctor_selected , setDoctor_selected] = useState("");
    const[selectedDate, setSelectedDate] = useState(null);
    const[TimeChange ,setTimeChange] = useState("");
    const[Mobile_Code , setMobile_Code] = useState("");
    const[Mobile_number,setMobile_Number] = useState("");
    const[Name , setName] = useState("");

    const dispatch = useDispatch();

    function handleOption(e){
        setSelected(e.target.value)
        dispatch(ClinicName(e.target.value))
    }

    function doctor_handleOption(e){
        setDoctor_selected(e.target.value)
        dispatch(DoctorName(e.target.value))
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
        dispatch(Date(date))
    };
    
    function handle_timeChange(e){
        setTimeChange(e.target.value)
        dispatch(Time(e.target.value))
    }

    const Mobile_Code_change=(e)=>{
        setMobile_Code(e.target.value)
        dispatch(Mobile_code(e.target.value))
    }
     
    const handleChange_patientName = (e) => {
       setName(e.target.value);
      dispatch(PatientName(e.target.value));
    };

    const handleChange_mobileNumber = (e) => {
      setMobile_Number(e.target.value);
     dispatch(Mobile_Number(e.target.value));
   };
 
  return (
    <>
    <div  className='w-1.5/3 h-[328px] md:h-[232px] rounded-3xl bg-slate-300 shadow-lg m-2'>
     <form className='m-3 '>
     <div className='null md:flex'>
     <div className='m-1'>
        <div >
            <span >Clinic</span>
        </div>
        <select className='w-48 rounded-md' value={selected} onChange={handleOption}>
           { 
            hospital_names.map((name)=>{return <option value={name}>{name}</option>})
           }
        </select>
     </div>

       <div className='m-1'>
          <div>
            <span >Doctor</span>
          </div>  
          <select className='w-48 rounded-md' value={Doctor_selected} onChange={doctor_handleOption}>
            {
                doctor_Names.map((name)=>{return <option value={name}>{name}</option>})
            }
          </select>
        </div> 
        </div>

        <div className='m-1'>
          <span>Patient Name</span>
          <input className='ml-1 mb-2 w-[286px] pl-1 rounded-md' value={Name} onChange={handleChange_patientName}/>
        </div>

        <div className='null md:flex'>
        <div className='m-1'>
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select Date"
        className="w-48 h-[20px] rounded-md pl-1"
      />
    </div>
    <div >
      <select value={TimeChange} onChange={handle_timeChange} className='m-1 rounded-md'>
         {times.map((time,index)=>{
            return <option key={index} value={time}>{time}</option>
         })}
      </select>
    </div>
    </div>
   
    <div className='m-1'>
       <select value={Mobile_Code} onChange={Mobile_Code_change} className='rounded-md py-0.5'>
          {mobile_code.map((code,index)=>{
            return <option key={index} value={code}>+{code}</option>
            })}
        </select>
        <input className='ml-3 rounded-md pl-1' placeholder='Mobile Number' value={Mobile_number} onChange={handleChange_mobileNumber}/>

        <div className='m-1 mt-5'>
            <Link className='bg-red-300 p-1 rounded-md' to="/Preview">Preview</Link>
        </div>
    </div>
     </form>
    </div>
   </>
  )
}

export default Body;