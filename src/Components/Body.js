import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { hospital_names, times, mobile_code, doctor_Names } from '../Utility/constants';
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClinicName, Date, DoctorName, Mobile_Number, Mobile_code, PatientName, Time, resetData } from '../ReduxStore/PatientSlice';
import SubmitPage from './SubmitPage';

const Body = () => {
    const dispatch = useDispatch();

    const selected = useSelector(store => store.app.ClinicName);
    const Doctor_selected = useSelector(store => store.app.DoctorName);
    const selectedDate = useSelector(store => store.app.Date);
    const TimeChange = useSelector(store => store.app.Time);
    const Mobile_Code = useSelector(store => store.app.Mobile_Code);
    const Mobile_number = useSelector(store => store.app.Mobile_Number);
    const Name = useSelector(store => store.app.PatientName);
    
    const handleOption = (e) => {
        dispatch(ClinicName(e.target.value));
    };

    const doctor_handleOption = (e) => {
        dispatch(DoctorName(e.target.value));
    };

    const handleDateChange = (date) => {
        dispatch(Date(date));
    };

    const handle_timeChange = (e) => {
        dispatch(Time(e.target.value));
    };

    const Mobile_Code_change = (e) => {
        dispatch(Mobile_code(e.target.value));
    };

    const handleChange_patientName = (e) => {
      const input = e.target.value;
      const onlyLettersAndSpaces = /^[A-Za-z\s]+$/;
      if (onlyLettersAndSpaces.test(input) || input === '') {
          dispatch(PatientName(input));
    }
  };

    const handleChange_mobileNumber = (e) => {
        let input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (input.length > 10) {
            // Truncate the input to 10 digits
            input = input.slice(0, 10);
        }       
         dispatch(Mobile_Number(input));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedDate) {
            alert("Please Select Date.");
            return;
        }
        if (!Mobile_number) {
            alert("Please fill Mobile Number.");
            return;
        }
        
    };

    return (
        <>
            <div className='h-[355px] sm:max-w-[628px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] rounded-3xl bg-slate-100 shadow-xl m-auto border-2 border-gray-200'>
                <form className='p-1 m-2 mt-0.5  ' onSubmit={handleSubmit}>
                  <div>
                   <div>
                      <div className='text-center  h-6 w-auto relative font-sans text-[18px] text-sky-800 mb-3 '>
                         <h1 className='  border-b-2  border-gray-300'>New Appointment</h1> 
                      </div>
                   </div>
                    <div className='flex'>
                        <div className='m-1 '>
                            <div>
                                <span className='font-sans text-[14px]'>Clinic</span>
                            </div>
                            <select className='w-full sm:w-[270px] md:w-[350px] lg:w-[450px] xl:w-[550px] rounded-md border-2 border-gray-300' value={selected} onChange={handleOption}>
                                {hospital_names.map((name, index) => <option key={index} value={name}>{name}</option>)}
                            </select>
                        </div>
                        <div className='m-1 ml-11'>
                            <div>
                                <span className='font-sans text-[14px]'>Doctor</span>
                            </div>
                            <select className='w-full sm:w-[270px] md:w-[350px] lg:w-[450px] xl:w-[550px] rounded-md border-2 border-gray-300' value={Doctor_selected} onChange={doctor_handleOption}>
                                {doctor_Names.map((name, index) => <option key={index} value={name}>{name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className='m-1'>
                        <span className='font-sans text-[14px]'>Patient Name</span>
                        <input className='mb-2 w-full h-[24px] p-1 rounded-md border-2 border-gray-300' value={Name} onChange={handleChange_patientName} required />
                    </div>
                    <div className='flex'>
                     <div className='m-1 '>
                        <div className='font-sans text-[14px]'>Date</div>
                            <ReactDatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select Date"
                                className='w-full sm:w-[270px] md:w-[350px] lg:w-[450px] xl:w-[550px] rounded-md border-2 border-gray-300'
                            />
                        </div>
                        <div className='m-1 ml-11'>
                           <div className='font-sans text-[14px]'>Start Time</div>
                            <select value={TimeChange} onChange={handle_timeChange} className='w-full sm:w-[270px] md:w-[350px] lg:w-[450px] xl:w-[550px] rounded-md border-2 border-gray-300'>
                                {times.map((time, index) => <option key={index} value={time}>{time}</option>)}
                            </select>
                        </div>
                    </div>
                    
                    <div className='m-1 mt-3 flex'>
                      <div>
                        <div  className='font-sans text-[14px]'>
                            Mobile Number
                        </div>
                        <div className='flex'>
                        <select value={Mobile_Code} onChange={Mobile_Code_change} className='rounded-md h-[24px]  py-0.5 border-2  border-gray-300'>
                            {mobile_code.map((code, index) => <option key={index} value={code}>+{code}</option>)}
                        </select>
                        <input className='w-full sm:w-[212px] md:w-[292px] lg:w-[392px] xl:w-[492px] rounded-md border-2 border-gray-300' placeholder='Mobile Number' value={Mobile_number} onChange={handleChange_mobileNumber} /> 
                        </div>
                     </div>
                       <div className='ml-12'>
                        <div  className='font-sans text-[14px]'>
                            Email Id
                        </div>
                    
                        <input className='w-full sm:w-[270px] md:w-[350px] lg:w-[450px] xl:w-[550px] rounded-md border-2 border-gray-300' placeholder='Email Id' />
                       </div>
                    </div>
                        <div className='m-1 mt-5 flex justify-center'>
                               <Link to='/submit' className="inline-block bg-red-300 p-1 rounded-md border border-red-900">
                                  Submit
                               <button type='submit' className="hidden" ></button>
                               </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Body;
