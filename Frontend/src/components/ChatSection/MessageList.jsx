import React, { Fragment } from "react"
import { useSelector } from "react-redux"

const MessageList = () => {
  const messages = useSelector((state) => state.message.messages)
  const selectedUser = useSelector((state) => state.user.selectedUser)
  if (!selectedUser) return <p>Slect a user for chatting</p>
  const userMessages = messages[selectedUser._id] || []
  return (
    <Fragment>
      <div>
        {userMessages.map((value, index) => {
          return <div key={index}>
            <p>{value.text}</p>
          </div>
        })}
      </div>
    </Fragment>
  )
}
export default MessageList