import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 borser -t'>
        <Title text1={'ABOUT'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>The HIS clothing brand was born out the need to create exceptional products for everyday individuals</p>
            <p>We've brought smiles to many customers since our creation</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>We desire to be the best clothing brand in the world</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-2 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our clothes our made with the highest quality of wool and polyester</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-2 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We offer deliveries for all parts of the world</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-2 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our customer service team is available 24/7 to help you with your needs</p>
        </div>

      </div>
      <NewsletterBox/>
      <Footer/>
    </div>
    
  )
}

export default About
