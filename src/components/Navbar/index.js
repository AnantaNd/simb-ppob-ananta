import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const token = Cookies.get('jwtToken')
  const navigate = useNavigate()
  useEffect(()=>{
    !token && navigate('/login')
  }, [token, navigate])

  return (
    <nav className='flex flex-row justify-between py-5 px-8 shadow-md fixed w-full bg-white'>
      <Link to={'/'}>
        <div className='flex flex-row gap-2 items-center'>
          <img src='/Logo.png' alt='img' height={25} width={25}/>
          <h1 className='font-semibold'>SIMB PPOB</h1>
        </div>
      </Link>
      <ul className='flex flex-row gap-9 font-semibold'>
        <li><Link to='/top-up'>Top Up</Link></li>
        <li><Link to='/transaction'>Transaction</Link></li>
        <li><Link to='/account'>account</Link></li>
      </ul>      
    </nav>
  )
}

export default Navbar