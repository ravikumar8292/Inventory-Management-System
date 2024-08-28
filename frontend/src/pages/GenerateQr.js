import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Generate from '../components/GenerateQr/Generate'

const GenerateQr = () => {
  return (
    <div className='bg-[#E6E6E6]'>
      <Navbar />
      <Generate />
      <Footer />
    </div>
  )
}

export default GenerateQr
