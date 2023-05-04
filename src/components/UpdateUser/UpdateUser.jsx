import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const UpdateUser = () => {
    const {user, auth, updateProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value || user.displayName;
        const photo =form.photo.value || user.photoURL;
        const email =form.email.value || user.email;
        // console.log(name, photo, email);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
    
          })
          .then(() => {
            console.log('profile updated');
            navigate('/')
          })
    
        .catch(error => {
          console.log(error);
          return;
        })
    }
    return (
        <div className="h-screen  mt-[60px] rounded-lg overflow-hidden flex items-center justify-center bg-green-300">
      <div className="bg-white w-[400px] rounded-[10px]">
        <h1 className="text-center pb-5 border-b text-2xl font-bold py-4">
          Update User
        </h1>
        <form onSubmit={handleForm} className="px-[40px]">
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input
              className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none"
              type="text"
              name="name"
               
            />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              <span className="hi">Name {user?.displayName}</span>
            </label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input
              className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none"
              type="text"
              name="photo"
               
            />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              <span className="hi">PhotoURL {user ? user.photoURL.slice(0,20) : 'loading'}...</span>
            </label>
          </div>
          <div className="relative my-[30px] border-b border-[#adadad]">
            <input
              className="w-full login-form px-[5px] h-[40px] text-sm border-0 bg-none outline-none"
              type="email"
              name="email"
               
            />
            <span className="optional"></span>
            <label className="text-sm duration-500 absolute top-[50%] left-[5px] text-[#adadad] pointer-events-none -translate-y-[50%]">
              <span className="hi">Email {user?.email}</span>
            </label>
          </div>
          
          {/* <div className="mb-5 ml-[5px] -mt-5px text-sm text-[#a6a6a6] cursor-pointer hover:underline">
            Forgot Password?
          </div> */}
          <input
            className="h-[50px] mb-3 w-full bg-[#2691d9] border rounded-[25px] text-lg text-white font-bold cursor-pointer outline-none hover:border-[#2691d9] duration-500"
            type="submit"
            value="Update"
          />
          
        </form>
        
        
      </div>
    </div>
    );
};

export default UpdateUser;