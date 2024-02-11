import React from 'react'
import { useSelector } from 'react-redux';

const Preview = () => {

  const Form_View = useSelector((store)=>store.app);

  return (
    <div>
          <div  className='w-1.5/3 h-[328px] md:h-[232px] rounded-2xl p-2 bg-red-300 shadow-lg'>
           <h1 className='font-bold text-sky-900 text-center'>Patient Deatils</h1>
           <h1 className='m-1'>Patient Name -{Form_View.PatientName}</h1>
           <h1 className='m-1'>Clinic Name -{Form_View.ClinicName}</h1>
           <h1 className='m-1'>Clinic Name -{Form_View.ClinicName}</h1>
           <h1 className='m-1'>Doctor Name -{Form_View.DoctorName}</h1>
           <h1 className='m-1'>Date -{Form_View.Date.toLocaleDateString()}    And Time -{Form_View.Time}</h1>
           <h1 className='m-1'>Mobile Number -{Form_View. Mobile_Number}</h1>
        </div>        
    </div>
  )
}

export default Preview ;