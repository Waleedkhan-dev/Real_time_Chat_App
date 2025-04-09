import React, { Fragment, useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signUp } from "../context/authApi";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({})

  const ValidationFrom = async () => {
    const newError = {}
    if (!formData.fullName.trim()) newError.fullName = "Name is required"
    if (!formData.email.trim()) newError.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newError.email = "Invalid email format"
    if (!formData.password.trim()) newError.password = "Password is required"
    else if (formData.password.length < 6) newError.password = "Password must be at least 6 characters"
    return newError
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await ValidationFrom();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return
    }
    console.log(formData);
    setFormData({ name: "", email: "", password: "" });
    setErrors({});
    try {
      const result = await signUp(formData)
      setSuccess(result.message)
      setFormData({ name: "", email: "", password: "" })
    } catch (error) {

    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Fragment>
      <div className="min-h-screen flex items-center justify-center bg-yellow-300 p-4">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <MdAccountCircle className="text-6xl text-blue-500 mb-2" />
            <p className="text-xl font-semibold text-gray-700">Create Your Account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <label className="block text-gray-600 text-sm mb-1">Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <MdEmail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-2">
                <CiLock className="text-gray-400 mr-2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full outline-none"
                />
                <FaEye onClick={() => setShowPassword(!showPassword)} />
              </div>
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Sign Up
            </button>

          </form>
          <div>
            <p>Already have an account? <Link to={"/signin"}>
              <button className="text-blue-500 cursor-pointer underline">signIn</button></Link></p>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default SignUpPage;
