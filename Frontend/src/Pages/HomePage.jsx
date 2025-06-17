import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {

 const [user, setUser] = useState([])
 const userapi = "http://localhost:8000/api/auth/user"
 const getUserName = async () => {
  try {
   const res = await axios.get(userapi)
   setUser(res.data)
  } catch (error) {

  }
 }
 useEffect(() => {
  getUserName()
 }, [])
 return (
  <div className="h-screen w-full flex">
   {/* Sidebar */}

   <div className="w-1/3 bg-gray-100 border-r p-4">
    <h2 className="text-xl font-bold mb-4">Chats</h2>

    <input
     type="text"
     placeholder="Search..."
     className="w-full p-2 mb-4 border rounded"
    />
    <div className="space-y-4">
     {
      user.map((value, index) => {
       return <div key={index}>

        <div className="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-50">
         <h3 className="font-medium">{value.fullName}</h3>
         <p className="text-sm text-gray-500">Another message...</p>
        </div>
       </div>
      })
     }

    </div>
   </div>


   <div className="w-2/3 flex flex-col">
    {/* Chat Header */}
    <div className="p-4 bg-gray-200 border-b">
     <h2 className="text-lg font-semibold">John Doe</h2>
     <p className="text-sm text-gray-600">Online</p>
    </div>

    {/* Messages */}
    <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-white">
     <div className="self-start bg-gray-100 p-2 rounded max-w-xs">Hi!</div>
     <div className="self-end bg-blue-100 p-2 rounded max-w-xs">Hello!</div>
    </div>

    {/* Message Input */}
    <div className="p-4 border-t bg-gray-100">
     <div className="flex">
      <input
       type="text"
       placeholder="Type a message..."
       className="flex-1 p-2 border rounded-l"
      />
      <button className="bg-blue-500 text-white px-4 rounded-r">
       Send
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default HomePage;
