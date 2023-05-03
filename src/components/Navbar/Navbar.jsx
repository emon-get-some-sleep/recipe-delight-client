import React, { useState } from "react";
import { FaBars,  FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <>
    <nav className="flex  gap-2 justify-between items-center px-2">
      <div className="flex items-center gap-2">
        <FaUtensils className="text-green-500 text-2xl"></FaUtensils>
        <h1 className="font-semibold text-2xl">Recepi Delight</h1>
      </div>
      <div className="hidden md:flex gap-4">
        <Link className="font-medium text-xl" to="/">Home</Link>
        <Link className="font-medium text-xl" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-xl" to="/recipi">Recipi</Link>
      </div>
      <div>
        <Link to="/login"><button className="hidden md:block bg-[#3A1C36] text-white font-medium text-xl border px-6 py-4 rounded-lg">Login</button></Link>
      </div>
      <div className="md:hidden">
      <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl"/>
      </div>
    </nav>
    {showMenu && <div className="flex md:hidden flex-col gap-3 items-center"> 
        
        <Link className="font-medium text-xl" to="/">Home</Link>
        <Link className="font-medium text-xl" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-xl" to="/recipi">Recipi</Link>
        <button className="font-medium bg-[#3A1C36] text-white text-xl border px-6 py-4 rounded-lg">Login</button>
    </div>}
    </>
  );
};

export default Navbar;
