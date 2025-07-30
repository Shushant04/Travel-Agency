 import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
 
 const Contact = () => {
   return (
     
       <div className='bg-gray-100'>
      
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/hero.png')" }}>
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center">
          <h4 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Contact
          </h4>
        </div>
      </div>
      <div>
        <div>
            <h3>Contact Details</h3>
            <div>
                <FaEnvelope />
                <p>info@travelagency.com</p>
            </div>
            <div>
                <FaPhone/>
                <p>+123 456 7890</p>
            </div>
            <div>
                <FaMapMarkerAlt/>
                <p>123 Travel,City,Country</p>
            </div>
        </div>
        <div>
            <h3>Get in touch</h3>
            <form>
                <div>
                    <label htmlFor='Name'>Name</label>
                    <input type='text' placeholder='Enter Name'/>
                </div>
                <div>
                    <label htmlFor='Name'>Email</label>
                    <input type='text' placeholder='Enter Email'/>
                </div>
                <div>
                    <label htmlFor='Name'>Message</label>
                   <textarea name='' placeholder='Write message' id=''></textarea>
                </div>
                <button>Send Message</button>


            </form>
        </div>
      </div>
     </div>
   )
 }
 
 export default Contact
 