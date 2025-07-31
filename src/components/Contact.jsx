import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-gray-100'>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Contact
          </h4>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">

        {/* Contact Details Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Details</h3>

          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-blue-600 text-lg" />
            <p className="text-gray-700">info@travelagency.com</p>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <FaPhone className="text-blue-600 text-lg" />
            <p className="text-gray-700">+123 456 7890</p>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <FaMapMarkerAlt className="text-blue-600 text-lg" />
            <p className="text-gray-700">123 Travel, City, Country</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in touch</h3>
          <form className="space-y-5 bg-white p-6 shadow rounded-lg">

            <div>
              <label htmlFor='name' className="block mb-1 text-gray-600">Name</label>
              <input
                type='text'
                id='name'
                placeholder='Enter Name'
                className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
              />
            </div>

            <div>
              <label htmlFor='email' className="block mb-1 text-gray-600">Email</label>
              <input
                type='email'
                id='email'
                placeholder='Enter Email'
                className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
              />
            </div>

            <div>
              <label htmlFor='message' className="block mb-1 text-gray-600">Message</label>
              <textarea
                id='message'
                rows="4"
                placeholder='Write message'
                className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
