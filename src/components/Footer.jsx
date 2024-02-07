import React from 'react'

const Footer = () => {
  return (
    <div className='text-white m-5 md:m-16'>
      <div className='md:flex justify-between text-lg text-gray-400'>
        <div className='mb-4'>
            <p className='font-bold my-4 text-white cursor-pointer'>Company</p>
            <p>About Us</p>
            <p>Careers</p>
        </div>
        <div className='mb-4'>
            <p className='font-bold my-4 text-white cursor-pointer'>View Website in</p>
            <p>English</p>
        </div>
        <div className='mb-4'>
            <p className='font-bold my-4 text-white cursor-pointer'>Need Help?</p>
            <p>Visit Help Center</p>
            <p>Share Feedback</p>
        </div>
        <div className='mb-4'>
            <p className='font-bold my-4 text-white cursor-pointer'>Connect With Us</p>
            <i class="bi bi-facebook px-5"></i>
            <i class="bi bi-twitter"></i>
        </div>
      </div>

    <p className='text-center my-16 text-gray-400'>&copy; 2024 Karthik. All Rights are Reserved.</p>
    </div>
  )
}

export default Footer
