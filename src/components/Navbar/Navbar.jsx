import React, { useContext, useState } from "react";
import { FaBars,  FaUtensils } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { Slide } from "react-awesome-reveal";

const Navbar = () => {
   const {user, logOut} = useContext(AuthContext);
   const navigate = useNavigate();
   const userProfile = () => {
    navigate('/updateUser');
   }
   
    const [showMenu, setShowMenu] = useState(false);

    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => {
        console.log(error);
      })
    }
  return (
   
       <>
    <nav className="flex  gap-2 justify-between items-center px-2">
      <div>
        
        <Link className="flex items-center gap-2" to="/"><FaUtensils className="text-green-500 text-2xl"></FaUtensils><h1 className="font-semibold text-2xl">Recepi Delight</h1></Link>
      </div>
      <div className="hidden md:flex gap-4">
        
        {/* <Link className="font-medium text-xl" to="/">Home</Link>
        <Link className="font-medium text-xl" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-xl" to="/recipi">Recipi</Link> */}
        <NavLink
        to="/"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
        >
          Home
        </NavLink>
        <NavLink
        to="/blogs"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
        >
          Blogs
        </NavLink>
        <NavLink
        to="/recipe"
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
        >
          Recipe
        </NavLink>
      </div>
      <div className="tooltip hidden md:flex gap-3" data-tip={user?.displayName}>
        {!user ?
        <Link to="/login"><button className="hidden md:block bg-[#3A1C36] text-white font-medium text-xl border px-6 py-4 rounded-lg">Login</button></Link>
        :
        <>
        <img onClick={userProfile} src={user.photoURL} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
        <button onClick={handleLogOut} className="text-sm text-gray-700">Sign Out</button>
        </>
        }
        
      </div>
      <div className="md:hidden">
      <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl"/>
      </div>
    </nav>
    {showMenu && <div className="flex md:hidden flex-col gap-3 items-center"> 
        
        <Link className="font-medium text-xl" to="/">Home</Link>
        <Link className="font-medium text-xl" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-xl" to="/recipe">Recipi</Link>
        {/* <button className="font-medium bg-[#3A1C36] text-white text-xl border px-6 py-4 rounded-lg">Login</button> */}
        {!user ?
        <Link to="/login"><button className="bg-[#3A1C36] text-white font-medium text-xl border px-6 py-4 rounded-lg">Login</button></Link>
        :
        <>
        <img src={user.photoURL} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
        <button onClick={handleLogOut} className="text-sm text-gray-700">Sign Out</button>
        </>
        }
        
    </div>}
    </>
    
   
  );
};

export default Navbar;
