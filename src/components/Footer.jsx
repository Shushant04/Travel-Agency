import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        {/* Column 1 */}
        <div>
          <h2 className='text-lg font-bold mb-2'>Travel Agency</h2>
          <p>Your trusted partner for unforgettable travel experiences.<br/> Explore the world with us.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className='text-lg font-bold mb-2'>Quick Links</h2>
          <div className='flex flex-col space-y-1'>
            <Link to='/'>Home</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className='text-lg font-bold mb-2'>Follow Us</h3>
          <div className='flex space-x-4 mb-4'>
            <FaFacebook className='cursor-pointer hover:text-blue-400' />
            <FaInstagram className='cursor-pointer hover:text-pink-400' />
            <FaTwitter className='cursor-pointer hover:text-blue-300' />
            <FaYoutube className='cursor-pointer hover:text-red-500' />
          </div>
          <form className='flex flex-col space-y-2'>
            <input 
              type='email' 
              placeholder='Enter your email' 
              className='p-2 rounded text-black w-100'
            />
            <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-40'>

              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright and Policy */}
      <div className='flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4 text-sm'>
        <p>&copy; 2025 Travel Agency. All rights reserved.</p>
        <div className='flex space-x-4 mt-2 md:mt-0'>
          <Link to='/' className='hover:underline'>Privacy Policy</Link>
          <Link to='/' className='hover:underline'>Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
