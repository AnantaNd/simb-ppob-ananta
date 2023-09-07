import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiLock, BiSolidUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { regist } from '../../actions/register'


function Register() {

  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [konfPassword, setKonfPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [showPassKonf, setShowPassKonf] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {registUserResult, registUserLoading, registUserError} = useSelector((state)=>state.registReducer)

  const handleRegister=(event)=>{
    event.preventDefault()
    dispatch(regist({email: email, first_name: firstName, last_name: lastName, password: password}))
    registUserError? navigate('/register'):navigate('/login')
  }
  const handleShowPass=()=>{
    setShowPass(!showPass)
  }
  const handleShowPassKonf=()=>{
    setShowPassKonf(!showPassKonf)
  }

  return (
    <div className='h-screen flex'>
      <form className='flex gap-4 flex-col w-full h-full xl:w-3/4 px-8 xl:px-28 items-center justify-center' onSubmit={(e)=>handleRegister(e)}>
        <h2 className='text-center text-2xl font-semibold capitalize'>lengkapi data<br/> untuk membuat akun</h2>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'>@</div>
          <input
            className='w-full p-2 active:bg-none' 
            placeholder='masukkan email anda'
            type='text' name='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'><BiSolidUser/></div>
          <input 
            className='w-full p-2 active:bg-none' 
            placeholder='masukkan nama depan anda'
            type='text' name='firstName'
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'><BiSolidUser/></div>
          <input 
            className='w-full p-2 active:bg-none' 
            placeholder='masukkan nama belakang anda'
            type='text' name='lastName'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'><BiLock/></div>
          <input 
            className='w-full p-2 active:bg-none' 
            placeholder='masukkan password anda'
            type={showPass? 'text':'password'} name='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}/>
            {!showPass? 
              <AiOutlineEye size={20} onClick={handleShowPass} className='cursor-pointer mr-8 text-gray-500'/>: 
              <AiOutlineEyeInvisible size={20} onClick={handleShowPass} className='cursor-pointer mr-8 text-gray-500'/>}
        </div>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'><BiLock/></div>
          <input 
            className='w-full p-2 active:bg-none' 
            placeholder='konfirmasi password anda'
            type={showPassKonf? 'text':'password'} name='konfPassword'
            value={konfPassword}
            onChange={(e)=>setKonfPassword(e.target.value)}/>
            {!showPassKonf? 
              <AiOutlineEye size={20} onClick={handleShowPassKonf} className='cursor-pointer mr-8 text-gray-500'/>: 
              <AiOutlineEyeInvisible size={20} onClick={handleShowPassKonf} className='cursor-pointer mr-8 text-gray-500'/>}
        </div>
        {registUserError &&(
          <div className='w-full bg-red-500 p-1 rounded-md'>
            <p className='text-white text-sm text-center'>{registUserError}</p>
          </div>        )}
        <button className='rounded py-2 bg-red-600 text-white w-full' type='submit'>Daftar</button>
        <p>Sudah Punya Akun? Login <Link className='font-semibold text-red-500' to='/login'>disini</Link></p>
      </form>
      <div className='w-full '>
        <img className='w-full h-full object-cover bg-cover bg-no-repeat bg-center' src={'/IllustrasiLogin.png'} alt="logo" />
      </div>
    </div>
  )
}

export default Register