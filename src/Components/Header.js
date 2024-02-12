import React from 'react'

const Header = () => {
  return (
    <>
     <div className='w-full h-12 bg-green-600 flex items-center justify-between  '>
        <img className='h-12 w-12  ' src='https://cdn4.vectorstock.com/i/1000x1000/95/88/sign-symbol-health-logo-hospital-red-cross-vector-35679588.jpg'/>
        <h1 className='font-extrabold text-2xl'>Satya Health Centre</h1>
        <button className='h-12 w-12 bg-red-500 rounded-xl hover:bg-red-50'>Back</button>
     </div>
    </>
  )
}

export default Header ;