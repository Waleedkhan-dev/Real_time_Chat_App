// import axios from "axios";
// import React, { useRef } from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { IoMdSend } from "react-icons/io";
// import { MdKeyboardVoice } from "react-icons/md";
// import { PiSticker } from "react-icons/pi";
// import { IoMdLink } from "react-icons/io";
// import { CiCamera } from "react-icons/ci";
// const HomePage = () => {
//   const [newMessage, setNewMessage] = useState("")
//   const [message, setMessage] = useState([
//     { text: "hi", from: "other" },
//     { text: "hello", from: "me" }
//   ])
//   const [user, setUser] = useState([])
//   const userapi = "http://localhost:8000/api/auth/user"
//   const getUserName = async () => {
//     try {
//       const res = await axios.get(userapi)
//       setUser(res.data)
//     } catch (error) {
//     }
//   }
//   useEffect(() => {
//     getUserName()
//   }, [])
//   const handleSend = () => {
//     if (newMessage.trim() === "") return;
//     setMessage([...message, { text: newMessage, from: "me" }])
//     setNewMessage("")
//   }
//   const handleKeyDown = (e) => {

//     if (e.key === "Enter") {
//       e.preventDefault()
//       handleSend()
//     }
//   }
//   const token = localStorage.getItem("token"); // token frontend localStorage me hona chahiye
//   const messageData = {
//     text: "Hello there!",
//     image: null,
//   };

//   axios.post("http://localhost:8000/api/message/send/67f5105f17704c4ffe30263e", messageData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err.response.data));

//   return (
//     <div className=" w-full h-[60vh] overscroll-auto  flex">
//       {/* Sidebar */}

//       <div className="w-1/3 bg-gray-100 border-r p-4">
//         <h2 className="text-xl font-bold mb-4">Chats</h2>

//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full p-2 mb-4 border rounded"
//         />
//         <div className="space-y-4 bg-black h-[50vh] items-center overflow-auto">
//           {
//             user.map((value, index) => {
//               return <div key={index}>

//                 <div className="p-2 bg-white shadow rounded cursor-pointer hover:bg-gray-50">
//                   <h3 className="font-medium">{value.fullName}</h3>
//                   <p className="text-sm text-gray-500">Another message...</p>
//                 </div>
//               </div>
//             })
//           }

//         </div>
//       </div>
//       <div className="w-2/3 flex flex-col">
//         <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-white">
//           {message.map((msg, index) => {
//             return <div key={index}
//               className={`p-2 max-w-xs ${msg.from === "me"
//                 ? "self-start bg-blue-100"
//                 : "self-end bg-green-100"
//                 }`}
//             >
//               {msg.text}
//             </div>
//           })}
//         </div>
//         <div className="p-4 border-t gap-3 bg-gray-100">
//           <div className="flex gap-1.5">
//             <div className="bg-white w-[80vw] px-3 rounded flex items-center">
//               <div>
//                 <PiSticker className="hover:cursor-pointer" />
//               </div>
//               <input
//                 type="text"
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 value={newMessage}
//                 onKeyDown={handleKeyDown}
//                 placeholder="Message"
//                 className="flex-1 p-2 border-none bg-white rounded outline-none "
//               />
//               <div className="flex gap-5">
//                 <IoMdLink className="hover:cursor-pointer text-blue-400" />
//                 <CiCamera className="hover:cursor-pointer text-blue-400" />
//               </div>
//             </div>
//             <button onClick={handleSend} className="bg-green-500 rounded-full text-white p-3
//       ">
//               {newMessage.trim() ? <IoMdSend /> : <MdKeyboardVoice />}

//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
