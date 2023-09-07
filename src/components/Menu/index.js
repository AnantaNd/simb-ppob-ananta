import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getService } from '../../actions/serviceAction'


function Menu() {

  const { getServiceResult, getServiceLoading, getServiceError} = useSelector((state)=>state.serviceReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getService())
  }, [dispatch])

  return (
    <div className='w-full'>
      <div className='flex flex-auto md:flex-row flex-wrap gap-5 my-20 w-full justify-between'>
        {getServiceResult?(
          getServiceResult?.data?.map((data, i)=>{
            return (
              <div className='items-center gap-2 cursor-pointer w-16' key={i}>
                <img className='bg-cover' src={data.service_icon} alt={data.service_code}/>
                <p className='text-center text-xs'>{data.service_name}</p>
              </div>
            )
          })
        ):getServiceLoading?(
          <p className='text-lg font-semibold text-center my-8'>Loading ...</p>
        ):(
          <p>{getServiceError ? getServiceError : 'Data transaction kosong'}</p>
        )}
      </div>
    </div>
  )
}

export default Menu