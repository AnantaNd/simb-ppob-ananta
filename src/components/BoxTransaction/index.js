import React from 'react';

function BoxTransaction({nominal, date, status}) {



  return (
    <div className='w-full'>
      <div className='px-6 py-5 my-4 border border-gray-300 rounded-lg w-full'>
        <div className='flex flex-row justify-between pb-3'>
          <h1 className={`text-2xl font-bold ${status==='TOPUP'? 'text-green-500':'text-red-500'}`} >{nominal}</h1>
          <h2 className='font-semibold'>{status}</h2>
        </div>
        <div className='flex flex-row gap-2'>
          <p className='text-gray-400'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default BoxTransaction