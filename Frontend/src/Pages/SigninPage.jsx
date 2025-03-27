import React, { Fragment } from "react"
import { AiFillProfile } from "react-icons/ai";

import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";



const SigninPage = () => {
 return (

  <Fragment>
   <div className="bg-black h-screen flex items-center justify-center w-full">
    <div className=" bg-white text-black flex flex-col  justify-center mx-auto w-[30%] h-[70vh] rounded p-2">
     <div className="flex flex-col justify-center items-center gap-1">
      <AiFillProfile className="mx-auto text-blue-600  text-4xl bg-gray-100 shadow rounded-3xl" />
      <h1 className=" text-gray-900 font-medium mx-auto">Wellcome Back</h1>
      <h4 className="text-blue-300 mx-auto">Sigin your Account</h4>
     </div>

     <form action="#" className="flex flex-col justify-evenly  gap-6 p-3 ">
      <div>
       <label htmlFor="" className="font-semibold text-black">Email</label>
       <div className="flex justify-start items-center gap-2  rounded bg-gray-300 p-2">
        <label htmlFor=""><MdEmail />
        </label>
        <input type="email" name="" id="" placeholder="Join" className="w-full  rounded outline-none " />
       </div>
      </div>
      <div>
       <label htmlFor="#" className="font-medium">Password</label>
       <div className="flex justify-start items-center gap-2 rounded bg-gray-100 p-2">
        <label htmlFor=""><RiLockPasswordLine />
        </label>
        <input type="email" name="" id="" placeholder="Join" className="w-full  rounded outline-none " />
       </div>
      </div>
      <div className="bg-blue-600 p-2 text-center  rounded">
       <button className="text-white text-xl font-normal cursor-pointer  mx-auto">Sigin</button>
      </div>
     </form>
     <div className="flex">
      <p>Don't have an Accont ?</p>
      <Link to={"/signup"} className="text-blue-600 underline">Create Account</Link>
     </div>

    </div>
   </div>

  </Fragment>
 )
}
export
 default SigninPage