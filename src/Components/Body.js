import React from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { hospital_names, times, mobile_code, doctor_Names } from '../Utility/constants';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ClinicName, Date, DoctorName, Mobile_Number, Mobile_code, PatientName, Time, resetData } from '../ReduxStore/PatientSlice';

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
        const input = e.target.value.replace(/\D/g, '');
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
        dispatch(resetData());
    };

    return (
        <>
            <div className='w-1.5/3 h-[358px] md:h-[252px] rounded-3xl bg-slate-200 shadow-lg m-2 '>
                <form className='m-3 ' onSubmit={handleSubmit}>
                   <div>
                      <h1 className='text-center m-2 relative font-extrabold text-sky-800'>
                         New Appointment
                         <div className="h-0.5  bg-slate-400 w-full absolute bottom-0"></div>
                      </h1>
                   </div>
                    <div className='null md:flex'>
                        <div className='m-1'>
                            <div>
                                <span className='font-semibold'>Clinic</span>
                            </div>
                            <select className='w-48 rounded-md' value={selected} onChange={handleOption}>
                                {hospital_names.map((name, index) => <option key={index} value={name}>{name}</option>)}
                            </select>
                        </div>
                        <div className='m-1'>
                            <div>
                                <span className='font-semibold'>Doctor</span>
                            </div>
                            <select className='w-48 rounded-md' value={Doctor_selected} onChange={doctor_handleOption}>
                                {doctor_Names.map((name, index) => <option key={index} value={name}>{name}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className='m-1'>
                        <span className='font-semibold'>Patient Name</span>
                        <input className='ml-1 mb-2 w-[286px] pl-1 rounded-md' value={Name} onChange={handleChange_patientName} required />
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
                        <div>
                            <select value={TimeChange} onChange={handle_timeChange} className='m-1 rounded-md'>
                                {times.map((time, index) => <option key={index} value={time}>{time}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className='m-1'>
                        <select value={Mobile_Code} onChange={Mobile_Code_change} className='rounded-md py-0.5'>
                            {mobile_code.map((code, index) => <option key={index} value={code}>+{code}</option>)}
                        </select>
                        <input className='ml-3 rounded-md pl-1' placeholder='Mobile Number' value={Mobile_number} onChange={handleChange_mobileNumber} />
                        <div className='m-1 mt-5 flex justify-around'>
                            <button type='submit' className='bg-red-300 p-1 rounded-md' >Submit</button>
                            <Link className='bg-red-300 p-1 rounded-md' to="/Preview">Preview</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Body;
