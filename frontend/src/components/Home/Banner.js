import React from "react";
import homeqr from "../../image/qr-code-scanner-image.webp";

const Banner = () => {
  return (
    <div className="container mx-auto pr-14 py-[90px] flex gap-2">
     
      <div className="mt-[130px] px-14 ml-[90px]">
        <h2 className="text-4xl font-bold">What is a QR code in an image?</h2>
        <br />
        <p>
          QR code saved within an image helps in retrieving information about a
          product, especially when the QR code on the packaging of the product
          is not readable due to external damage. You do not need a QR code
          scanner online from images compatible with the Vyapar app to read the
          information in the app. You can use a QR code image to fetch product
          details for your bills. QR code is a great way to store sensitive
          business information too. You can encrypt information in a QR code and
          access it whenever required.
        </p>
      </div>
      <div className="ml-12">
        <img src={homeqr} alt="" srcset="" className="w-[1500px] h-[450px]" />
      </div>
    </div>
  );
};

export default Banner;
