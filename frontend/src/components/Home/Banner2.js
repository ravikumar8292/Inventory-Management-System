import React from "react";
import qrhome from "../../image/scan-qr-code.webp";

const Banner2 = () => {
  return (
    <div className="container mx-auto pl-14 py-[90px] flex gap-2">
      <div className="ml-12">
        <img src={qrhome} alt="" srcset="" className="w-[1500px] h-[450px]" />
      </div>
      <div className="mt-[130px] px-14 ml-[90px]">
        <h2 className="text-4xl font-bold">
          How do I scan the QR code in the image?
        </h2>
        <br />
        <p>
          Scanning a QR code is a seamless process and the Vyapar app shares
          compatibility with a QR code scanner online from image. Using a QR
          code online scanner, you can get the exact information encoded in a QR
          code image without the requirement of an external scanner. Using the
          Vyapar app, you can use the information fetched from the image of a QR
          code to bill your customers quickly. You can have this QR code stored
          in your device to fetch the product details correctly in a convenient
          way.
        </p>
      </div>
    </div>
  );
};

export default Banner2;
