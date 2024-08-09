import React, { useState } from 'react'
import uploadImage from '../../image/scan-qr-code.webp'
import scanImage from '../../image/why-business-need-qr-code-scanner.webp'
import QrReader from "react-qr-scanner";

const Scan = () => {
    const [selectedFile , setSelectedFile] = useState(null);
    const [isCameraEnabled , setIsCameraEnabled] = useState(false);

    const handleChange = (event)=>{
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            readQrCodeFromFile(file);
          }
    }

    const readQrCodeFromFile = (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
    }

    const uploadSuccess = ()=>{
        alert("Successfully Upload QR Code !");
    }

    const handleEnableCamera = () => {
        setIsCameraEnabled(true);
      };
    
      const handleDisableCamera = () => {
        setIsCameraEnabled(false);
      };

  return (
    <div className='flex justify-evenly mt-20 mb-12 '>
        {/* uploadqr */}
      <div className="border w-[43%] h-[425px] flex flex-col items-center shadow-lg ">
        <img src={uploadImage} alt="" srcset=""  className='w-[520px] h-[310px]'/>
        <h2 className='text-center font-bold text-2xl'>Upload QR Code</h2>
        <div className="flex flex-col w-[600px] gap-2">
            <input type="file" onChange={handleChange} className='border rounded-md'/>
            <button type="button" onClick={uploadSuccess} className='border rounded-md bg-[#007BFF] text-white font-bold p-1'>Upload</button>
        </div>
      </div>

      {/* scanqr */}
      <div className="border w-[43%] h-[425px] flex flex-col items-center shadow-lg relative ">
        <img src={scanImage} alt="" srcset=""  className='w-[520px] h-[310px]'/>
        <h2 className='text-center font-bold text-2xl mt-4'>Scan QR Code</h2>
        <div className="flex flex-col mt-5 w-[600px] ">
        {isCameraEnabled ? (
          <>
            <QrReader
              delay={300}
              className="object-cover w-[600px] h-[310px] absolute top-2"
            //   onError={handleError}
            //   onScan={handleScan}
            />
             <button type="button" onClick={handleDisableCamera} className='border rounded-md bg-[#007BFF] text-white font-bold p-1'>Disable Camera</button>
          </>
        ) : (
            <button type="button" onClick={handleEnableCamera} className='border rounded-md bg-[#007BFF] text-white font-bold p-1'>Enable Camera</button>
        )}
           
        </div>
      </div>
    </div>
  )
}

export default Scan;
