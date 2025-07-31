import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { FaWhatsapp } from "react-icons/fa6";

const MessageList = () => {
  const messages = useSelector((state) => state.message.messages);
  const selectedUser = useSelector((state) => state.user.selectedUser);

  if (!selectedUser) return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <span className="text-gray-300 text-[70px]"><FaWhatsapp /></span>
      <h4 className="text-gray-900 text-2xl font-normal">WhatsApp for Windows</h4>
      <p className="text-[15px] font-light text-gray-400">Send and receive your messages without keeping your phone online</p>
      <p className="text-[15px] font-light text-gray-400">Use WhatsApp on up to 4 linked devices and one phone at a time</p>
    </div>
  );

  const userMessages = messages[selectedUser._id] || [];

  return (
    <Fragment>
      <div className="flex w-auto flex-col items-end p-2 justify-end bg-yellow-500">
        {userMessages.map((value) => (
          <div key={value.id} className="p-1">
            <div className="flex justify-center left-0 p-2 rounded items-center bg-green-500 max-w-[70%] w-fit gap-10">
              <p className="text-gray-900">{value.text}</p>
              <p className="text-[10px] text-gray-800">
                {new Date(value.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MessageList;
