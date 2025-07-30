import React from 'react'

const destination =[
    {
            image: '/Images/gal1.jpg',
           title: 'Paris, France',
           description: 'The city of Light draws millions of visitors every year with its unforgettable ambitions'
    },

    {
        image: '/Images/gal2.jpg',
        title: 'Bali, Indonesia',
        description: 'Bali is living postcard, an indonesia paradise that feels like fantasy'
    },

   {
        image: '/Images/gal3.png',
        title: 'New York , USA',
        description: 'New york city is the largest city in US and home to many world famous attraction'
},


    {
        image: '/Images/gal4.jpg',
        title: 'Tokyo, Japan',
        description: 'Tokyo offers seemingly unlimitied choice of entertainment,shopping,cultural attraction and dinning'
    }

    
];

const PopularDestination = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h3 className='text-3x1 font-bold text-center mb-8'>Popular Destination </h3>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destination.map((city, index) =>(
                <div key={index} className='bg-white rounded-lg shawdow-md overflow-hidden cursor-pointer'> 
                    <img src={city.image} alt={city.title} className='w-full h-58 object-cover transform transition duration-300 hover:scale-110'/>
                     <div className='p-4'> 
                        <h4 className='text-xl font-bold mb-2'>{city.title }</h4>
                        <p className='text-gray-600'>{city.description}</p>
                         </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default PopularDestination
