import { Fragment } from "react"
import React from "react"
const Sidebar = () => {
  const contact = ["waleed", 'saim', "Naveed", "saqlain", "Sherjeel"]
  return (
    <Fragment>
      <div className="w-1/2 border-r bg-gray-300 border-gray-300" >
        <div className="font-semibold text-gray-200"> Chat
        </div>
        {contact.map((val, index) => {
          <div key={index}>
            <p className="text-xl font-medium">{val}</p>
            <p className="text-xl font-medium">Last message....</p>
          </div>
        })}
      </div>
    </Fragment>
  )
}
export default Sidebar