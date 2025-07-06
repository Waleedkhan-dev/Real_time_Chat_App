import React, { Fragment } from "react"
import { useSelector } from "react-redux"

const MessageList = () => {
  const messages = useSelector((state) => state.message.messages)
  const selectedUser = useSelector((state) => state.user.selectedUser)
  if (!selectedUser) return <p>Slect a user for chatting</p>
  const userMessages = messages[selectedUser._id] || []
  return (
    <Fragment>
      <div className="flex justify-end">
        {userMessages.map((value, index) => {
          return <div key={index}>
            <div className="flex justify-center left-0 p-2 rounded items-center bg-green-500  mx-w-[70%] w-fit gap-10 ">
              <p className="text-gray-900">{value.text}</p>
              <p className="text-[10px] text-gray-800">{new Date(value.timeStamp).toLocaleTimeString([], {
                // minute: "2-digit",
                hours: "2-digit",
                hour12: true
              })}</p>
            </div>
          </div>
        })}
      </div>
    </Fragment>
  )
}
export default MessageList