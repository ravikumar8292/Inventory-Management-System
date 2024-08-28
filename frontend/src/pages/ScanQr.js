import React from 'react'
import Navbar from '../components/Navbar'
import Scan from '../components/ScanQr/Scan'
import Footer from '../components/Footer'

const ScanQr = () => {
  return (
    <div className='bg-[#E6E6E6]'>
      <Navbar />
      <Scan />
      <Footer />
    </div>
  )
}

export default ScanQr
