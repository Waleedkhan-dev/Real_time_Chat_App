import axios from 'axios';
import React, { Fragment } from 'react'
import { useState } from 'react';
import { CiChat1 } from "react-icons/ci";
import { FaVideo } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

 const selectedUser = useSelector((state) => state.user.selectedUser)
 const LogOutURL = `http://localhost:8000/api/auth/logout`
 const userNavigate = useNavigate()
 const [deletUser, setDeleteUser] = useState('')

 const logOutUser = async () => {
  console.log("user click on del butn");

  try {
   const res = await axios.delete(LogOutURL, {
    withCredentials: true
   })
   setDeleteUser(res.data)
   userNavigate('/sigin')
  } catch (error) {
   console.log("logout api is not fetch");

  }
 }

 return (
  <Fragment>
   <nav className='flex items-center bg-gray-200 h-11 '>
    <div className='flex items-center justify-between w-full rounded'>
     <h1 className='text-center items-center '>{selectedUser ? selectedUser.fullName : ""}</h1>
     <div className='flex justify-center items-center gap-4 p-4 rounded'>
      <p className='border border-gray-300 rounded p-2 cursor-pointer'><FaVideo /></p>
      <p className='border border-gray-300 rounded p-2 cursor-pointer'><IoCall /></p>
     </div>
    </div>
    {/* <div className='flex justify-between  items-center px-4 py-2 gap-3'>
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
     <Link to={'/signin'}>
      <div className='flex items-center  justify-center gap-2 bg-gray-300 p-2 rounded cursor-pointer'>
       <p><IoIosLogOut /></p>
       <p>Logout</p>
      </div>
     </Link>
    </div> */}
    <button onClick={logOutUser} className='cursor-pointer bg-red-600 rounded p-2 '>Logout</button>
   </nav>

  </Fragment>
 )
}
export default Navbar