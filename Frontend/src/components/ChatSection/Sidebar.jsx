import { Fragment } from "react"
import React from "react"
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { BiLogoMeta } from "react-icons/bi";


import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const Sidebar = () => {
  const contact = ["waleed", 'saim', "Naveed", "saqlain", "Sherjeel"]
  return (
    <Fragment>
      <div className="flex bg-gray-300 w-[15%] h-[100vh] p-3">
        <div className="flex flex-col h-[15vh] items-center   justify-start  gap-3">
          <div>
            <CiMenuBurger />
          </div>
          <div>
            <HiOutlineChatBubbleBottomCenterText />
          </div>
          <div>
            <FaPhoneAlt />

          </div>
          <div>
            <HiOutlineStatusOnline />

          </div>
          <div>
            <BiLogoMeta />
          </div>
        </div>
        <div className="w-1/2 border-r bg-gray-300 border-gray-300" >

          {contact.map((val, index) => {
            <div key={index}>
              <p className="text-xl font-medium">{val}</p>
              <p className="text-xl font-medium">Last message....</p>
            </div>
          })}
        </div>
      </div>
    </Fragment>
  )
}
export default Sidebar