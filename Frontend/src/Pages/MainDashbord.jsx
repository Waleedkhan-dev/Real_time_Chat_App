import { Fragment } from "react"
import React from "react"
import Sidebar from "../components/ChatSection/Sidebar"
import Navbar from "../components/Navbar"
import SideNave from "./sideNave"





const MainDashbord = () => {
 return (
  <Fragment>
   <div className="flex justify-start bg-green-400 w-full h-screen">
    <div className="w-[5%] bg-gray-400">
     <SideNave />
    </div>
    <div className="w-[20%]  overflow-auto p-2 bg-gray-900">
     <Sidebar />
    </div>
    <div className="w-[75%]">
     <Navbar />
    </div>
   </div>
  </Fragment>
 )
}
export default MainDashbord