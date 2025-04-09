import React, { Fragment } from 'react'
import { CiChat1 } from "react-icons/ci";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom"

const Navbar = () => {
 return (
  <Fragment>
   <nav className='flex justify-between items-center bg-gray-200 px-4 '>
    <div className='flex items-center justify-center gap-2 bg-gray-300 p-2 rounded'>
     <p><CiChat1 /></p>
     <p>Chat</p>
    </div>
    <div className='flex justify-between  items-center px-4 py-2 gap-3'>
     <div className='flex items-center cursor-pointer justify-center gap-2 bg-gray-300 p-2 rounded'>
      <p><IoSettings /></p>
      <p>Setting</p>
     </div>
     <Link to={'/profile'}>
      <div className='flex items-center cursor-pointer justify-center gap-2 bg-gray-300 p-2 rounded'>
       <p><CgProfile /></p>
       <p>Profile</p>
      </div>
     </Link>
     <div className='flex items-center  justify-center gap-2 bg-gray-300 p-2 rounded cursor-pointer'>
      <p><IoIosLogOut /></p>
      <p>Logout</p>
     </div>
    </div>
   </nav>

  </Fragment>
 )
}
export default Navbar