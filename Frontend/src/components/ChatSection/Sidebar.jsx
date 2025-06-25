import { Fragment } from "react"
import React from "react"


const Sidebar = () => {
  const contact = ["waleed", 'saim', "Naveed", "saqlain", "Sherjeel"]

  return (
    <Fragment>

      <div className="rounded bg-gray-200 p-2">
        <input type="search" placeholder="Serach..." className="outline-none " />
      </div>

    </Fragment>
  )
}
export default Sidebar