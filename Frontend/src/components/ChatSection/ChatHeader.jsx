import React from "react";

export default function ChatHeader({ user }) {
 return (
  <div className="p-4 border-b border-gray-300 bg-white flex justify-between items-center">
   <div>
    <div className="font-semibold">{user.name}</div>
    <div className={`text-sm ${user.isOnline ? "text-green-500" : "text-gray-400"}`}>
     {user.isOnline ? "Online" : "Offline"}
    </div>
   </div>
   <div className="flex gap-4 text-gray-600">
    <i className="fas fa-search" />
    <i className="fas fa-ellipsis-v" />
   </div>
  </div>
 );
}
