/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Haveanaccountornot from '../components/HaveAccountORNot'
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../Slice/authslice';
import { useNavigate } from 'react-router-dom';


function SignUpfrom() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if(user) {
      navigate('/'); // Navigate to home page if user is logged in
    }
  },[user,navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ email, name, username, password }))
    setEmail('');
    setName('');
    setUsername('');
    setPassword('');
  };

  // const handleLoginNavigation = () => {
  //   // Implement logic to navigate to login page
  //   console.log('Navigate to login');
  // };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-auto">
      <main className=" signup-box flex flex-col items-center rounded-md ">
        <div className='box w-96 h-[37rem] bg-white rounded-md shadow-md p-4 border-black-950 border-solid mr-80'>
          <div className="page flex flex-col items-center">
            <div className="header text-center">
              <h1 className="logo mb-10" 
                  style={{
                    backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v3/yW/r/cmOQpE9vFiR.png")',
                    backgroundPosition: '0px 0px', 
                    backgroundSize: '176px 258px', 
                    width: '175px', 
                    height: '51px', 
                    backgroundRepeat: 'no-repeat', 
                    display: 'inline-block'
                  }}
              ></h1>
              <p className="font-bold text-gray-500 text-lg mb-4">
                Sign up to see photos and videos from your friends.
              </p>
              <button className="w-full py-2.5 px-5 rounded-md border-none bg-blue-500 text-white mb-4">
                <i className="fab fa-facebook-square"></i> Log in with Facebook
              </button>
              <div className="flex flex-row items-center text-gray-500 mb-4">
                <hr className="flex-grow border-t border-gray-300" />
                <p className="px-5">OR</p>
                <hr className="flex-grow border-t border-gray-300" />
              </div>
            </div>
            <div className="container flex flex-col w-full">
              <form onSubmit={handleSubmit} className="w-full">
                <label className="block mb-2">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Mobile Number or Email"
                    className="w-full border border-gray-300 bg-gray-100 py-2 px-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full border border-gray-300 bg-gray-100 py-2 px-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="w-full border border-gray-300 bg-gray-100 py-2 px-2 mb-2"
                  />
                </label>
                <label className="block mb-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full border border-gray-300 bg-gray-100 py-2 px-2"
                  />
                </label>
                <button disabled={isLoading}
                  type="submit"
                  className="w-full py-2.5 px-5 rounded-md border-none bg-blue-500 text-white mb-4"
                >
                  {isLoading ? 'Loading...' : 'Register'}
                </button>
              </form>
            </div>
          </div>

          <div className='-ml-15 mt-8'>
            <Haveanaccountornot accountornot="already have an account" linkText="Sign In" linkTo="/api/v1/users/login" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUpfrom;
