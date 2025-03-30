import React, { Fragment } from "react"
const ProfilePage = () => {
  return (
    <Fragment>
      <div className="h-screen bg-base-300 pt-20">
        <div className="max-w-2xl mx-auto p-4 py-8">
          <div className="bg-yellow-500 relative rounded-xl p-6 space-y-8">
            <div className="text-center">
              <label
                htmlFor="avatr-upload"
                className={`bg-base-content h-10 w-20 rounded-full hover:scale-105
         p-4`}
              >

              </label>
              <h1 className="text-white text-2xl font-medium ">Profile</h1>
              <p className="mt-2 ">Your Profile information</p>
            </div>
            <div className="flex flex-col justify-start    ">
              <label htmlFor="">Name</label>
              <input type="text" readOnly placeholder="waleed khan" className="outline-none border-blue-300 px-2 border rounded" />

            </div>
            <div className="flex flex-col justify-start  ">
              <label htmlFor="">password</label>
              <input type="text" readOnly placeholder="....." className="outline-none border-blue-300 px-2 border rounded" />

            </div>
            <button className="bg-blue-700 px-4 py-2 rounded text-white cursor-pointer">Update Profile</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default ProfilePage