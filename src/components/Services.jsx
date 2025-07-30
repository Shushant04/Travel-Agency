import React from 'react'
import { FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell } from 'react-icons/fa'

const services = [
  {
    icon: <FaPlane className='text-4xl text-blue-400' />,
    title: 'Flight Booking',
    description: 'We provide easy and quick flight booking to make your travel hassle-free'
  },
  {
    icon: <FaHotel className='text-4xl text-blue-400' />,
    title: 'Hotel Booking',
    description: 'Book hotels at the best prices with our exclusive deals and discounts'
  },
  {
    icon: <FaUmbrellaBeach className='text-4xl text-blue-400' />,
    title: 'Beach Tours',
    description: 'Enjoy relaxing beach tour with all-inclusive packages and guided tour'
  },
  {
    icon: <FaConciergeBell className='text-4xl text-blue-400' />,
    title: 'Concierge Services',
    description: 'Get personalized concierge service for seamless travel experience'
  }
];

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8'>Our Services</h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {services.map((service, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition'>
              <div className='mb-4 flex justify-center'>{service.icon}</div>
              <h4 className='text-xl font-bold mb-2'>{service.title}</h4>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
