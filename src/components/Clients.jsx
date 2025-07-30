import React from 'react'


const testimonials = [
  {
   name: 'John Doe',
   image: '/Images/me2.png',
   text: 'This travel agency provided excellent services and helped us plan the perfect vacation',
   location: 'New York , USA'
  },
  {
    name: 'Alice Johnson',
   image: '/Images/me.png',
   text: 'Great customer services & fantastic travel packages. Will definetly book them again',
   location: 'Sydnet, Australia'
  },
  {
     name: 'Jane Smith',
   image: '/Images/me2.png',
   text: 'Amazing Experience!. The tour guides were knowledable and destination were breathetaking',
   location: 'London, UK'
  },
  
];

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3xl font-bold text-center mb-8'>What our clients says</h3>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonials, index) => (
            <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition'>
              <img src={testimonials.image} alt='' className='w-24 h-24 rounded-full mx-auto mb-4'/>

              <h4 className='text-xl font-bold mb-2'>{testimonials.name}</h4>
              <p className='text-gray-600'>{testimonials.location}</p>
             <p className='text-gray-600 italic'>{testimonials.text}</p>


            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients
