import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.svg'

const RootLayout = () => {
  return (
    <div>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
            <Link to={"/"}>
                <img src={logo} alt="Logo" className='w-28 object-contain' />
            </Link>

            <Link to={"/create-post"} className='font-inner font-medium bg-[#6469ff] text-white px-4 -y-2 rounded-md'>
                Create
            </Link>
        </header>
        <Outlet />
    </div>
  )
}

export default RootLayout