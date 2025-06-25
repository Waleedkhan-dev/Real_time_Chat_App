import React from "react";
// import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./SendMessage";
import SendMessage from "./SendMessage";
export default function ChatWindow() {
 const user = {
  name: "Zed",
  isOnline: false,
 };
 return (
  <div className="flex flex-col justify-between w-full min-h-screen bg-white border-l">
   {/* <ChatHeader user={user} /> */}
   <MessageList />
   <SendMessage />
  </div>
 );
}


