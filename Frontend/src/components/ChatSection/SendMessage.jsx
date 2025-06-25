import React, { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
const SendMessage = () => {
 const dispatch = useDispatch()
 const selectedUser = useSelector((state) => state.user.selectedUser)
 const [text, setText] = useState("")
 const handleSend = () => {
  if (!text.trim() || !selectedUser) return
  dispatch({ text, to: useSelector._id })
  setText('')
 }

 return (
  <Fragment>
   <div className="flex bottom-0 justify-center items-center bg-gray-300 gap-4 rounded">
    <input type="text"
     value={text}
     onChange={(e) => setText(e.target.value)}
     placeholder="message..."

    />
    <button onClick={handleSend}>
     send
    </button>
   </div>
  </Fragment>
 )
}
export default SendMessage