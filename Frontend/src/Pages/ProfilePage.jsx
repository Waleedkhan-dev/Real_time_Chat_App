import React, { Fragment } from "react"
const ProfilePage = () => {
 return (
  <Fragment>
   <div className="h-screen bg-base-300 pt-20">
    <div className="max-w-2xl mx-auto p-4 py-8">
     <div className="bg-base-300 rounded-xl p-6 space-y-8">
      <div className="text-center">
       <h1 className="text-white text-2xl font-medium ">Profile</h1>
       <p className="mt-2 ">Your Profile information</p>
      </div>
      <div className="flex flex-col' items-center gap-4">
       <img src={authuser.profilePic || "avatar.png"} alt="" />
       <label
        htmlFor="avatr-upload"
        className={`absolute top-0 right-0 bg-base-content hover:scale-105
         p-4`}
       >

       </label>
      </div>
     </div>
    </div>
   </div>
  </Fragment>
 )
}
export default ProfilePage