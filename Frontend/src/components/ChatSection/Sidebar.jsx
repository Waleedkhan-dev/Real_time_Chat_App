export default function Sidebar({ users, onSelectUser, selectedUser }) {
 return (
  <div className="w-1/4 bg-white border-r border-gray-300 flex flex-col">
   <div className="p-4 font-bold text-xl border-b">Chats</div>
   <div className="flex-1 overflow-y-auto">
    {users.map((user, idx) => (
     <div
      key={idx}
      onClick={() => onSelectUser(user)}
      className={`flex justify-between items-center p-4 cursor-pointer border-b hover:bg-gray-100 ${selectedUser?.name === user.name ? "bg-gray-200" : ""
       }`}
     >
      <span>{user.name}</span>
      <span
       className={`h-3 w-3 rounded-full ${user.online ? "bg-green-500" : "bg-red-400"
        }`}
      ></span>
     </div>
    ))}
   </div>
  </div>
 )
}
