import React, { Fragment, useRef, useState } from "react"
import { IoCameraOutline } from "react-icons/io5";

const ProfilePage = () => {

  const fileRef = useRef()
  console.log(fileRef);

  const [img, setImg] = useState(null)

  return (
    <Fragment>
      <div className="h-screen bg-base-300 pt-20">
        <div className="max-w-xl mx-auto p-4 py-8">
          <div className="bg-gray-800 relative rounded-xl p-6 space-y-8">
            <div className="text-center ">
              <h1 className="text-gray-100 font-medium">Profile</h1>
              <h5 className="text-gray-300">Your Profile Information</h5>
              <div className="w-28 h-28 mx-auto relative bg-gray-400 overflow-hidden rounded-full " onClick={() => fileRef.current.click()}>
                {
                  img ? (
                    <img src={img} alt="preve" className="h-full w-full" />
                  ) : (
                    <div className="flex justify-center   items-center h-full text-white text-3xl">
                      <IoCameraOutline className=" absolute z-40 right-10 bottom-0 " />
                    </div>
                  )}
                <div className="absolute bg-white bottom-0 rounded-full">
                  <IoCameraOutline className="absolute z-20" />
                </div>
                <input type="file" accept="image/*" ref={fileRef}
                  onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
                  className="hidden"
                />

              </div>
              <div className="text-center">
                <p className="text-gray-200">Click the camra icons to change your Profile</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-start ">
              <label htmlFor="" className="text-white">Name</label>
              <input type="text" readOnly placeholder="waleed khan" className="outline-none border-gray-300 text-white p-2 border rounded" />

            </div>
            <div className="flex flex-col gap-1 justify-start">
              <label htmlFor="" className="text-white">password</label>
              <input type="text" readOnly placeholder="....." className="outline-none border-gray-300 p-2 text-white border rounded" />

            </div>
            <div className="">
              <h1 className="text-white font-medium">Account Information</h1>
              <div className="flex justify-between items-center">
                <p className="text-gray-200">Member Since</p>
                <p className="text-gray-200">02-05-2043</p>
              </div>
              <hr className="text-gray-500 mt-5" />
              <div className="flex justify-between p-4 items-center">
                <h1 className="text-gray-300 ">Account Status</h1>
                <span className="text-green-300">Active</span>
              </div>
            </div>
            <button className="bg-blue-700 px-4 py-2 rounded text-white cursor-pointer">Update Profile</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default ProfilePage