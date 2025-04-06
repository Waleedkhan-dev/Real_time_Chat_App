import React, { Fragment } from 'react'
const Navbar = () => {
 return (
  <Fragment>
   <nav className='flex justify-evenly bg-gray-600'>
    <li className='list-none text-white p-2'><a href="#">chat</a></li>
    <li className='list-none text-white p-2'><a href="#">Unread Message</a></li>
    <li className='list-none text-white p-2'><a href="#">Status</a></li>
   </nav>
  </Fragment>
 )
}
export default Navbar