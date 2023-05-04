import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[140px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2">
     <div className="flex items-center justify-center">
     <div>
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <FaUtensils className="text-green-500 text-2xl"></FaUtensils>
          <h1 className="font-semibold text-2xl text-center sm:text-left">Recepi Delight</h1>
        </div>
        <p className="text-sm font-medium mt-3">Nothing could the beat the classic taste of indian food</p>
        <p className="flex items-center sm:items-start justify-center sm:justify-normal">
        <button className="bg-[#3A1C36] text-white  font-medium text-sm border px-4 py-2 mt-3 rounded-lg">Join Us Now</button>
        </p>
      </div>
     </div>
     <div className="flex items-center justify-center">
     <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-bold">Menu</h3>
        <Link className="font-medium text-sm" to="/">Home</Link>
        <Link className="font-medium text-sm" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-sm" to="/recipi">Recipi</Link>
      </div>
     </div>
     <div className="flex items-center justify-center">
     <div className="flex flex-col gap-3 items-center">
      <h3 className="text-2xl font-bold">Follow Us</h3>
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedinIn />
      </div>
     </div>
      <div className="flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="text-2xl font-bold">Legal</h3>
        <p className="text-sm font-medium mt-3">Terms & Condition</p>
        <p className="text-sm font-medium mt-3">Privacy & Policy</p>
        <p className="text-sm font-medium mt-3">Cookies</p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
