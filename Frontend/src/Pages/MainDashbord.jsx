import { Fragment } from "react"
import React from "react"
import Sidebar from "../components/ChatSection/Sidebar"
import Navbar from "../components/Navbar"

const MainDashbord = () => {
 return (
  <Fragment>
   <div className="flex bg-green-400 w-full h-screen">
    <div className="w-[22%] bg-gray-900">
     <Sidebar />
    </div>
    <div className="w-[76%]">
     <Navbar />
    </div>
   </div>
  </Fragment>
 )
}
export default MainDashbord