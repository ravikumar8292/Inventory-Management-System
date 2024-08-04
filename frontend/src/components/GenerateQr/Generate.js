import React, { useState } from 'react'
import homeqr from "../../image/scan-qr-code.webp";

const nameList = [
  { title: 'C1', value: 'c1' },
  { title: 'C2', value: 'c2' },
  { title: 'C3', value: 'c3' },
  { title: 'C4', value: 'c4' },
  { title: 'C5', value: 'c5' },
];

const Generate = () => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const onSelectHandler = (e) => {
    setName(e.target.value);
  };
 
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const onGenerateHandler = () => {
    if (name && date && quantity) {
      console.log("Value",name ,date , quantity)
      setSuccessMessage(true);
      if(successMessage){
        alert('Successfully Generate Qr Code .')
      }
      // Here you can add the logic to generate the QR code.
    } else {
      setSuccessMessage(false);
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className='container mx-auto px-14 my-12 flex justify-between'>
      <div className="mt-2 ml-14">
      <img src={homeqr} alt="" srcset="" className="w-[500px] h-[450px]" />
      </div>
      <div className="mr-[200px] text-center my-14">
        <div className=" w-[410px] shadow-lg pb-14">
          <p className='p-4 font-bold text-xl'>Generate QR Code</p>
          <div className="">
              <select className="select w-[300px] border p-2" onChange={onSelectHandler} name="name" value={name}>
              <option value="" disabled>Select a name</option>
              {nameList.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.title}
                </option>
              ))}
            </select>
            <input className='w-[300px] border my-2 p-2' type="date" placeholder="Date" value={date} onChange={onDateChange} />
            <input className='w-[300px] border mb-2 p-2' type="number" placeholder="Quantity" value={quantity} onChange={onQuantityChange} />
            <br /><button className='mt-8 w-[300px] bg-[#007BFF] text-white p-2' onClick={onGenerateHandler}>Generate QR</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generate;
