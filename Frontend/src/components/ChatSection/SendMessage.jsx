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

 const handleDown = (e) => {
  if (e.key === 'Enter') {
   handleSend()
  }
 }
 return (
  <Fragment>
   {
    selectedUser ? <div className="flex justify-center items-center">
     <div className="flex bottom-0 w-[80vw]
    ] justify-center p-2 items-center bg-gray-300 gap-4 rounded">
      <input type="text"
       value={text}
       onChange={(e) => setText(e.target.value)}
       onKeyDown={handleDown}

       placeholder="message..."
       className="w-[80%] bg-gray-50 outline-none border-[1px] border-gray-500 p-2 rounded"
      />
      <button className="p-3  rounded-full bg-green-500 text-gray-200 cursor-pointer border-[1px] border-gray-50" onClick={handleSend}>

       {text.trim() ? <IoMdSend /> : <MdKeyboardVoice />}
      </button>
     </div>
    </div> : (
     <div className="bg-gray-100 text-gray-500 text-center">This chat end to end encripted</div>
    )
   }
  </Fragment>
 )
}
export default SendMessage