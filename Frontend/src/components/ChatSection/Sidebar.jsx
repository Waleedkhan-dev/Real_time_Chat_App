import axios from "axios"
import { useEffect, useState } from "react"
import { Fragment } from "react"
import React from "react"
import { useDispatch } from "react-redux"
import { setSelectedUser } from "../../redux/userSlice"


const Sidebar = () => {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  const getUserData = "http://localhost:8000/api/auth/user"
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(getUserData)
        const data = res.data
        setUsers(data)

      } catch (error) {
        console.log("user data is not get fromthe api");

      }
    }
    getData()
  }, [formData])


  return (
    <Fragment>
      <div className="rounded  bg-gray-200 p-2">
        <input type="search" placeholder="Serach..." className="outline-none " />
      </div>
      <div className="">

        <div className="">
          {
            users.length > 0 ? (
              users.map((val, index) => {
                return <div
                  onClick={() => dispatch(setSelectedUser(val))}
                  key={index} className=" p-2 border-[1px] cursor-pointer">
                  <p className="text-slate-100 font-sans">{val.fullName}</p>
                </div>
              })
            ) : (
              <div>
                User Not Found
              </div>
            )
          }
        </div>
      </div>
    </Fragment>
  )
}
export default Sidebar