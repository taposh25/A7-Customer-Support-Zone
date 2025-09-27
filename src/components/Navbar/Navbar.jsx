
import React from "react"


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="flex-1 text-xl font-bold">CS — Ticket System</div>
      <div className="flex ">
        <ul className="menu menu-horizontal px-1 hidden md:flex">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <li><a>Contact</a></li>
        </ul>
        <button className="btn bg-[#6D37E6] ml-2 text-white">+ New Ticket</button>
      </div>
    </div>
  )
}

export default Navbar
