import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getBallance } from '../../actions/ballanceAction'
import { getProfile } from '../../actions/profileAction'
import { rupiah } from '../../helper'

function Saldo() {

  const [showSaldo, setShowSaldo] = useState(false)
  const {getProfileResult, getProfileLoading, getProfileError} = useSelector((state)=>state.profileReducer)
  const {getBallanceResult, getBallanceLoading, getBallanceError} = useSelector((state)=>state.ballanceReducer)

  const handleShowSaldo=()=>{
    setShowSaldo(!showSaldo)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProfile())
    dispatch(getBallance())
  },[dispatch])
  // console.log(getBallanceResult?.data)

  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <div className='flex flex-col justify-between w-3/4'>
        <img className='rounded-full' height={70} width={70} src={getProfileError? 'profilePhoto.png' : getProfileResult?.data?.profile_image} alt='img'/>
        <div>
          <h3 className='text-lg'>Selemat Datang, </h3>
          <h1 className='text-2xl capitalize font-bold'>
            {getProfileResult?.data?.first_name} {getProfileResult?.data?.last_name}
          </h1>
        </div>
      </div>
      <div className='w-full h-full bg-red-600 text-white rounded-md p-5'>
        <p className='pb-4'>Saldo Anda</p>
        <h1 className='text-3xl font-semibold items-center'>{showSaldo? rupiah(getBallanceResult?.data?.balance): 'Rp ******'}</h1>
        <div className='flex flex-row gap-2 pt-2 items-center'>
          <p className='text-sm cursor-pointer'>Lihat Saldo </p>
          {showSaldo? <AiOutlineEyeInvisible  onClick={handleShowSaldo} className='cursor-pointer'/>: <AiOutlineEye  onClick={handleShowSaldo} className='cursor-pointer'/>}
        </div>
      </div>
    </div>
  )
}

export default Saldo