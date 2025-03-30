import React, { Fragment } from "react";
import { AiFillProfile } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const SigninPage = () => {
 return (
  <Fragment>
   <div className="bg-gradient-to-r from-black via-gray-900 to-black h-screen flex items-center justify-center w-full">
    <div className="bg-white text-black flex flex-col justify-center mx-auto w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] h-[75vh] rounded-2xl shadow-lg p-6">
     <div className="flex flex-col justify-center items-center gap-2">
      <AiFillProfile className="text-blue-600 text-5xl bg-gray-200 shadow-md rounded-full p-2" />
      <h1 className="text-gray-900 text-2xl font-bold">Welcome Back!</h1>
      <h4 className="text-blue-400">Sign in to your account</h4>
     </div>

     <form action="#" className="flex flex-col gap-5 p-4">
      <div>
       <label htmlFor="email" className="font-semibold text-black">Email</label>
       <div className="flex items-center gap-2 rounded bg-gray-100 p-2 focus-within:ring-2 focus-within:ring-blue-500">
        <MdEmail className="text-gray-500" />
        <input
         type="email"
         name="email"
         id="email"
         placeholder="Enter your email"
         className="w-full bg-transparent outline-none"
        />
       </div>
      </div>
      <div>
       <label htmlFor="password" className="font-semibold text-black">Password</label>
       <div className="flex items-center gap-2 rounded bg-gray-100 p-2 focus-within:ring-2 focus-within:ring-blue-500">
        <RiLockPasswordLine className="text-gray-500" />
        <input
         type="password"
         name="password"
         id="password"
         placeholder="Enter your password"
         className="w-full bg-transparent outline-none"
        />
       </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 p-3 text-white text-lg font-semibold rounded transition duration-300">
       Sign In
      </button>
     </form>

     <div className="flex justify-center gap-2 mt-4 text-sm">
      <p>Don't have an account?</p>
      <Link to="/signup" className="text-blue-600 underline">Create Account</Link>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default SigninPage;
