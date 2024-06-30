import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Container from '../components/Container';
import Flex from '../components/Flex';

const MyAccount = () => {
  return (
      <section>
          <Breadcrumb />
          <Container>
              <h5 className=' font-poppins font-normal text-sm  leading-5 text-right mb-20'>Welcome! <span className='text-thard'>Md Rimel</span> </h5>

              <Flex>
                  <div className='w-[30%] '> 
                      <h2 className=' font-poppins  font-medium text-base leading-6'>Manage My Account</h2>
                      <h3 className='font-poppins mt-4 ml-[35px]  font-medium text-base leading-6 text-thard'>My Profile</h3>
                      <h3 className='font-poppins mt-4 ml-[35px]  font-medium text-base leading-6 text-[#b8b8b8]'>Address Book</h3>
                      <h3 className='font-poppins mt-4 ml-[35px] mb-6  font-medium text-base leading-6 text-[#b8b8b8]'>My Payment Options</h3>
                      <h2 className=' font-poppins  font-medium text-base leading-6'>My Orders</h2>
                      <h3 className='font-poppins mt-4 ml-[35px]  font-medium text-base leading-6 text-[#b8b8b8]'>My Returns</h3>
                      
                      <h3 className='font-poppins mt-4 ml-[35px] mb-6  font-medium text-base leading-6 text-[#b8b8b8]'>My Cancellations</h3>
                      <h2 className=' font-poppins  font-medium text-base leading-6'>My WishList</h2>
                  </div>
                  <div className='w-[70%] rounded drop-shadow-md  bg-white p-20 mb-32'>
                      <form>
                          <h1 className='font-poppins  font-medium text-xl leading-7 mb-4 text-thard'>Edit Your Profile</h1>
                          <div className="grid gap-6 mb-6 md:grid-cols-2">
                              
          <div>
            <label htmlFor="first_name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">First Name</label>
            <input type="text" id="first_name" className="bg-[#F5F5F5] h-12  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Md" required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Last Name</label>
            <input type="text" id="last_name" className="bg-[#F5F5F5] h-12  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rimel" required />
          </div>
        
          <div>
            <label htmlFor="website" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Email</label>
            <input type="url" id="website" className="bg-[#F5F5F5] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="rimel1111@gmail.com" required />
          </div>
          <div>
            <label htmlFor="visitors" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Address</label>
            <input type="number" id="visitors" className="bg-[#F5F5F5] h-12  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kingston, 5236, United State" required />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">Password Changes</label>
          <input type="email" id="email" className="bg-[#F5F5F5] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Current Passwod" required />
        </div> 
        <div className="mb-6">
          
          <input type="password" id="password" className="bg-[#F5F5F5] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New Passwod" required />
        </div> 
        <div className="mb-6">
          
          <input type="password" id="confirm_password" className="bg-[#F5F5F5] h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm New Passwod" required />
        </div> 
       <div className='flex justify-end'>
                              
        <button type="submit" className="  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 h-14 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
        <button type="submit" className="text-white   bg-thard hover:bg-thard focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-4 h-14  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
        </div>
      </form>

                  </div>
              </Flex>
          </Container>
    </section>
  )
}

export default MyAccount;