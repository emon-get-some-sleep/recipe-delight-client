import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-green-300">
      <div className="bg-white w-[400px] rounded-[10px]">
        <h1 className="text-center pb-5 border-b">Login</h1>
        <form className="px-[40px]">
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none" type="email" name="email" />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]"><span className="hi">Enter Email</span></label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad] ">
            <input className="w-full login-form px-[5px] h-[40px] bg-none outline-none text-sm" type="password" name="password" />
            <span className="optional"></span>
            <label className="text-sm absolute duration-500 top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">Enter Password</label>
          </div>
          <div>Forgot Password?</div>
          <input type="submit" value="Login" />
          <div>
            <p>
              New to recipi delight? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
