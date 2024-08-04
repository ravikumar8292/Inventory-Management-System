import React, { useState } from 'react'
import Register from './Register';
import { Link } from 'react-router-dom';


const Login = ({setLoginModal, setShowModal}) => {
    

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
      };
    
      const handleSignup = ()=>{
        setLoginModal(false);
        setShowModal(true);
      }

      return (
        <>
        <div className="fixed top-0 bottom-0 left-0 right-0 opacity-50 bg-[gray] "></div>

        <div className="fixed left-1/3 top-44 ml-12 z-10 flex items-center justify-center bg-gray-100">
          <div className="bg-white py-8 px-14 rounded-lg shadow-md w-[800px] max-w-md relative">
            <button type="button" className='absolute right-5 top-3 color-black text-xl' onClick={()=>setLoginModal(false)}>X</button>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
             
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>


              <div className="text-center">
                  register here!{" "}

                  <Link className='text-[navy] font-bold' onClick={handleSignup}>register</Link>
              </div>
            </form>
          </div>
        </div>
        </>
      );
    
}


export default Login;