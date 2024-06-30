import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import sideImage from '../assets/Side Image.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../Slices/userSlice'

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const auth = getAuth();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [error, setError] = useState('');
  let handleLogin = () => {
    if(email === '' || password === ''){
      setError('Please fill all fields');
    }
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const user = userCredential.user;
          dispatch(userLoginInfo(user));
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/');
        })
  .catch((error) => {
    const errorCode = error.code;
    setError(errorCode);
  });
  }
  return (
    <section className='lg:mt-[69px] lg:mb-[131px] mt-5 mb-5'>
      <Container>
          <Flex className="justify-between  lg:flex-row flex-col">
                  <div>
                      <Image className="lg:h-[781px]" src={sideImage }/>
                  </div>
          <div className='lg:ml-[129px]'>
            <h1 className=' text-4xl font-medium w-[345px] mt-10 lg:mt-[227px]'>Log in to Exclusive</h1>
          
            <h3 className='mt-6 font-normal text-base'>Enter your details below</h3>
              <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" class="    text-gray-900 text-sm focus:ring-blue-500  block w-full p-2.5 border-gray-300 dark:placeholder-gray-400 border-b-[2px] dark:focus:border-blue-500 mt-10" placeholder="Email or Phone Number" required />
            <input type="password" onChange={(e) => setPassword(e.target.value)} id="name" class="    text-gray-900 text-sm focus:ring-blue-500  block w-full p-2.5 border-gray-300 dark:placeholder-gray-400 border-b-[2px] dark:focus:border-blue-500 mt-12" placeholder="Password" required />
            <p className='text-red-500  mt-8 text-base'>{error}</p>
            <div className='flex justify-between'>
                  
              <button type='submit' onClick={handleLogin} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-10">Log In</button>
              <h3 className='mt-10  cursor-pointer  text-red-600'>Forget Password?</h3>
            </div>
          </div>
        </Flex>
      </Container>
      
    </section>
  )
}

export default Login
