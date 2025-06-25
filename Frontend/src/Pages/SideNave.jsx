import { Fragment } from "react"
import React from "react";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaLock, FaLockOpen, FaPhoneAlt, FaRegStar } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { BiLogoMeta } from "react-icons/bi";
import { PiArchiveDuotone } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
const SideNave = () => {
 const sidebarMessagwSectoin = [
  <CiMenuBurger />, <HiOutlineChatBubbleBottomCenterText />, <FaPhoneAlt />, <HiOutlineStatusOnline />, <BiLogoMeta />, <CgProfile />
 ]
 const sidbarSettingElement = [
  <FaLock />, <FaRegStar />, <PiArchiveDuotone />, <IoSettingsOutline />, <BiLogoMeta />
 ]
 return (
  <Fragment>
   <div>
    <div className="flex items-center  h-[100vh] p-2">
     <div className=" flex flex-col  justify-center gap-80 h-full items-center">
      <div className="flex flex-col h-[15vh] items-center   justify-start  gap-3">
       {sidebarMessagwSectoin.map((value, index) => {
        return <div key={index}>
         <p>{value}</p>
        </div>
       })}
      </div>
      <div className="flex flex-col h-[15vh] items-center   justify-start  gap-3">
       {sidbarSettingElement.map((value, index) => {
        return <div key={index}>
         <p className="text-white text-[16px]">{value}</p>
        </div>
       })}
      </div>
     </div>
     {/* <div className="w-1/2 border-r bg-gray-300 border-gray-300" >

      {contact.map((val, index) => {
       <div key={index}>
        <p className="text-xl font-medium">{val}</p>
        <p className="text-xl font-medium">Last message....</p>
       </div>
      })}
     </div> */}

    </div>

   </div>
  </Fragment>
 )
}
export default SideNave