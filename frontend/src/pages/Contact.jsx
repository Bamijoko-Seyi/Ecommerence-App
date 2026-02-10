import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'
import {assets} from '../assets/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our store</p>
          <p className='text-gray-500'>11232 AV SW<br/>Edmonton, Alberta</p>
          <p className='text-gray-500'>Tel: (672)4443562 <br/>Email: seyiwork@yahoo.com</p>
          <p className='font-semibold text-xl text-gray-600'> Carrers at HIS</p>
          <p className='text-gray-500'>Get the chance to work for us</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>

      </div>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Contact
