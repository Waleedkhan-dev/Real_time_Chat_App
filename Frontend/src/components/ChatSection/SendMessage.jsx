import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IoMdSend } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { sendmessage } from "../../redux/messageSlice";

const SendMessage = () => {
 const dispatch = useDispatch()
 const selectedUser = useSelector((state) => state.user.selectedUser)
 const [text, setText] = useState("")
 const handleSend = () => {
  if (!text.trim() || !selectedUser) return;
  dispatch(sendmessage({ to: selectedUser._id, text }))
  setText('')
 }

 return (
  <Fragment>
   <div className="flex justify-center items-center">
    <div className="flex bottom-0 w-[80vw]
    ] justify-center p-2 items-center bg-gray-300 gap-4 rounded">
     <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="message..."
      className="w-[80%] bg-gray-50 outline-none border-[1px] border-gray-500 p-2 rounded"

     />
     <button className="p-3  rounded-full bg-green-500 cursor-pointer border-[1px] border-gray-50" onClick={handleSend}>

      {text.trim() ? <IoMdSend /> : <MdKeyboardVoice />}
     </button>
    </div>
   </div>
  </Fragment>
 )
}
export default SendMessage