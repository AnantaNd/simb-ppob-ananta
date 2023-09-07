import React from 'react'
import Navbar from '../Navbar'

function Layout({children}) {
  return (
    <div>
      <Navbar/>
      <div className='px-20 py-24 md:px-32'>
        {children}
      </div>
    </div>
  )
}

export default Layout