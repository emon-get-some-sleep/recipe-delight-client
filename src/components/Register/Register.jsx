import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Register = () => {
  const [error, setError] = useState('');
  const {newUser} = useContext(AuthContext);
  const handleForm = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
    if(password.length < 6) {
      setError('Password must be more than six characters long');
      return;
    }
    console.log(name, photoURL, email, password);
    newUser(name, photoURL, email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error => {
      console.log(error);
    })
    form.reset();
    setError('');
  }
  return (
    <div className="h-screen  mt-[60px] rounded-lg overflow-hidden flex items-center justify-center bg-green-300">
      <div className="bg-white w-[400px] rounded-[10px]">
        <h1 className="text-center pb-5 border-b text-2xl font-bold py-4">
          Register
        </h1>
        <form onSubmit={handleForm} className="px-[40px]">
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input
              className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none"
              type="text"
              name="name"
              required
            />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              <span className="hi">Your Name Please</span>
            </label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input
              className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none"
              type="text"
              name="photo"
              required
            />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              <span className="hi">Photo URL</span>
            </label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input
              className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none"
              type="email"
              name="email"
              required
            />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              <span className="hi">Enter Email</span>
            </label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad] ">
            <input
              className="w-full login-form px-[5px] h-[40px] bg-none outline-none text-sm"
              type="password"
              name="password"
              required
            />
            <span className="optional"></span>
            <label className="text-sm absolute duration-500 top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              Enter Password
            </label>
          </div>
          {/* <div className="mb-5 ml-[5px] -mt-5px text-sm text-[#a6a6a6] cursor-pointer hover:underline">
            Forgot Password?
          </div> */}
          <input
            className="h-[50px] w-full bg-[#2691d9] border rounded-[25px] text-lg text-white font-bold cursor-pointer outline-none hover:border-[#2691d9] duration-500"
            type="submit"
            value="Register"
          />
          <div>
            <p className="my-[30px] text-center font-medium text-sm text-[#666666] ">
              Already have an account?
              <Link className="text-[#2691d9] hover:underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
        {
          error && <p className="text-red-500 text-center my-2 font-bold text-sm">{error}</p>
        }
        <div className="flex  items-center justify-center gap-4 pb-2">
          <button className="text-center text-sm border border-[#2691d9] hover:-translate-y-[5px] duration-500  rounded-lg h-[50px] p-2">
            {" "}
            <FaGoogle className="inline" /> Register with Google
          </button>
          <button className="text-center text-sm border border-[#2691d9] hover:-translate-y-[5px] duration-500  rounded-lg h-[50px] p-2">
            {" "}
            <FaGithub className="inline" /> Register with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
