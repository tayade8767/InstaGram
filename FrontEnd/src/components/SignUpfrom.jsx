import React, { useState } from 'react';
// import mobileImage from './image.png';


function SignUpfrom() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { email, name, username, password });
    // Clear form after submission (optional)
    setEmail('');
    setName('');
    setUsername('');
    setPassword('');
  };

  const handleLoginNavigation = () => {
    // Implement logic to navigate to login page
    console.log('Navigate to login');
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img 
        src={'https://in.images.search.yahoo.com/images/view;_ylt=AwrPqDXVvpxmB2EyRkG9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzI0MmEyNGViOTZkYzAxODFiMjk5NGI4ZjNhMzRlYzdlBGdwb3MDMTEEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dmobile%2Bnstagrm%2Bimage%2Bt%26ei%3DUTF-8%26type%3DE210IN826G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D11&w=860&h=671&imgurl=www.kindpng.com%2Fpicc%2Fm%2F460-4608214_iphone-instagram-mockup-png-png-download-mobile-phone.png&rurl=https%3A%2F%2Fnew-featuring.blogspot.com%2F2021%2F06%2Fdownload-415-instagram-mobile-mockup.html&size=477.5KB&p=mobile+nstagrm+image+t&oid=242a24eb96dc0181b2994b8f3a34ec7e&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Download+415%2B+Instagram+Mobile+Mockup+Free+Download+PSD+Mockups+File&b=0&ni=200&no=11&ts=&tab=organic&sigr=CJYopSnvO..1&sigb=TRGpd.NAyvQo&sigi=nylSBylVXp5L&sigt=zg0T0ljlUGc_&.crumb=lv1pPEcfRzD&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210IN826G0'} 
        alt="Mobile preview" 
        className="absolute top-0 left-0 h-full w-full object-cover opacity-20" 
      />
      <main className="signup-box flex flex-col items-center rounded-md">
        <div className='box w-200 h-500 bg-white rounded-md shadow-md p-4 mt-20 border-black-950 border-solid'>
          <div className="page flex flex-col items-center pb-8">
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
                <button
                  type="submit"
                  className="w-full py-2.5 px-5 rounded-md border-none bg-blue-500 text-white mb-4"
                >
                  Sign up
                </button>
                <ul className="list-none text-center mb-2 text-gray-500">
                  <li className="inline">By signing up, you agree to our </li>
                  <li className="inline font-bold">Terms,</li>
                  <li className="inline font-bold">Data Policy,</li>
                  <li className="inline"> and </li>
                  <li className="inline font-bold">Cookies Policy.</li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUpfrom;
