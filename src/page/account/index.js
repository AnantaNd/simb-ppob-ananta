import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updatePhoto } from '../../actions/photoAction'
import { getProfile } from '../../actions/profileAction'
import { Layout } from '../../components'
import ModalEditProfile from '../../components/ModalEditProfile'



function Account() {

  const [selectImg, setSelectImg] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {getProfileResult, getProfileLoading, getProfileError} = useSelector((state)=>state.profileReducer)


  const handleLogout =async()=>{
    await Cookies.remove('jwtToken')
    // window.location.reload()
    navigate('/login')
  }
  const handleSelectImg =(event)=>{
    setSelectImg(event.target.files[0])
    dispatch(updatePhoto({profile_image: selectImg}))
  }

  useEffect(()=>{
    dispatch(getProfile())
  }, [dispatch])
  
  // console.log(getProfileResult?.data)
  return (
    <div>
      <Layout>
        <div className='flex flex-col items-center gap-5'>
          <div>
            <img className='rounded-full' height={90} width={90} src={getProfileError? 'profilePhoto.png' : getProfileResult?.data?.profile_image} alt='img'/>
            <input
              type="file"
              name="picture"
              id='picture'
              accept="image/png, image/jpeg"
              onChange={handleSelectImg}
              // value={'selectImg'}
              className="rounded-full bg-secondary-color w-10 h-10 absolute translate-x-16 -translate-y-9 z-20 opacity-0 "
            />
            <label htmlFor='picture' className='rounded-full bg-gray-100 w-8 h-8 absolute translate-x-16 -translate-y-8  z-20'>
              <BsFillPencilFill className='absolute translate-x-2 translate-y-2  z-20' />
            </label>
          </div>
          <h1>{getProfileResult?.data?.first_name} {getProfileResult?.data?.last_name}</h1>
          <form>
            <div className='flex flex-col w-96'>
              <label className='py-2'>Email</label>
              <input className='p-2 border border-gray-400 rounded-md' name='email' defaultValue={getProfileResult?.data?.email} disabled/>
            </div>
            <div className='flex flex-col w-96'>
              <label className='py-2'>Nama Depan</label>
              <input className='p-2 border border-gray-400 rounded-md' name='name' defaultValue={getProfileResult?.data?.first_name}/>
            </div>
            <div className='flex flex-col w-96'>
              <label className='py-2'>Nama Belakang</label>
              <input className='p-2 border border-gray-400 rounded-md' name='name' defaultValue={getProfileResult?.data?.last_name}/>
            </div>
          </form>
          {/* <button className='w-96 bg-red-500 text-white font-semibold py-2 rounded-md'>Edit Profile</button> */}
          <ModalEditProfile/>
          <button className='w-96 border border-red-500 text-red-500 font-semibold py-2 rounded-md' onClick={handleLogout}>Logout</button>
        </div>
      </Layout>
    </div>
  )
}

export default Account