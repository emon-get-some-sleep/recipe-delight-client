import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[140px] flex justify-between">
      <div>
        <div className="flex items-center gap-2">
          <FaUtensils className="text-green-500 text-2xl"></FaUtensils>
          <h1 className="font-semibold text-2xl">Recepi Delight</h1>
        </div>
        <p className="text-sm font-medium mt-3">Nothing could the beat the classic taste of indian food</p>
        <button className="bg-[#3A1C36] text-white font-medium text-sm border px-4 py-2 mt-3 rounded-lg">Join Us Now</button>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold">Menu</h3>
        <Link className="font-medium text-sm" to="/">Home</Link>
        <Link className="font-medium text-sm" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-sm" to="/recipi">Recipi</Link>
      </div>
      <div className="flex flex-col gap-3">
      <h3 className="text-2xl font-bold">Follow Us</h3>
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      <FaLinkedinIn />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-bold">Legal</h3>
        <p className="text-sm font-medium mt-3">Terms & Condition</p>
        <p className="text-sm font-medium mt-3">Privacy & Policy</p>
        <p className="text-sm font-medium mt-3">Cookies</p>
      </div>
    </div>
  );
};

export default Footer;
