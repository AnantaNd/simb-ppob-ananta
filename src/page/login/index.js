import { yupResolver } from '@hookform/resolvers/yup'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiLock } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { loginAuth } from '../../actions/authAction'

function Login() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [showPass, setShowPass] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = Cookies.get('jwtTokent')

  const { loginAuthResult, loginAuthLoading, loginAuthError } = useSelector((state)=>state.loginReducers)

  const validSchema = Yup.object().shape({
    email: Yup.string().required('masukkan email').email(),
    pass: Yup.string().required('masukkan password').min(8, 'password minimal 8 karakter')
  })
  const formOpt = {resolver: yupResolver(validSchema)}
  const {register, handleSubmit, formState} = useForm(formOpt)
  const {errors} = formState

  const onSubmit =(event)=>{
    event.preventDefault()
    dispatch(loginAuth({email: email, password: pass}))
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }

  useEffect(()=>{
    loginAuthResult && navigate('/')
    token && navigate('/')
    // window.location.reload()
  }, [loginAuthResult ,navigate, token])

  // console.log(loginAuthError)

  const handleShowPass=()=>{
    setShowPass(!showPass)
  }
  
  return (
    <div className='h-screen flex'>
      <form className='flex gap-4 flex-col w-full h-full xl:w-3/4 px-8 xl:px-28 items-center justify-center' onSubmit={(e)=>handleSubmit(onSubmit(e))}>
        <div className='flex flex-row gap-3'>
          <img src='/Logo.png' alt='img'/>
          <h1 className='text-center text-xl font-semibold'>SIMB PPOB</h1>
        </div>
        <h2 className='text-center text-2xl font-semibold capitalize'>masuk atau buat akun<br/> untuk memulai</h2>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'>@</div>
          <input 
            className='w-full py-2 active:bg-none pl-2' 
            type='text' name='email'
            placeholder='email' 
            value={email} 
            {...register('email')}
            onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <small>{errors.email?.message}</small>
        <div className='flex flex-row gap-6 p-0 items-center w-full border rounded-sm'>
          <div className='pl-3 text-gray-400'><BiLock/></div>
          <input 
            className='w-full py-2 active:bg-none pl-2' 
            type={showPass? 'text':'password'} 
            name='password' 
            placeholder='password' 
            value={pass} 
            {...register('pass')}
            onChange={(event)=>setPass(event.target.value)}/>
            {!showPass? 
              <AiOutlineEye size={20} onClick={handleShowPass} className='cursor-pointer mr-8 text-gray-500'/>: 
              <AiOutlineEyeInvisible size={20} onClick={handleShowPass} className='cursor-pointer mr-8 text-gray-500'/>}
        </div>
        <small>{errors.pass?.message}</small>
        <button 
          className='rounded py-2 bg-red-600 text-white w-full' 
          type='submit'>Masuk</button>
        <p>Belum Punya Akun? Register <Link className='font-semibold text-red-500' to='/register'>disini</Link></p>
        {loginAuthError && (
          <div className='w-full bg-red-500 p-1 rounded-md'>
            <p className='text-white text-sm text-center'>{loginAuthError}</p>
          </div>
        )}
      </form>
      <div className='w-full '>
        <img className='w-full h-full object-cover bg-cover bg-no-repeat bg-center' src={'/IllustrasiLogin.png'} alt="logo" />
      </div>
    </div>
  )
}

export default Login