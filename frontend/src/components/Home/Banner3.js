import React from "react";
import qrhome from "../../image/why-business-need-qr-code-scanner.webp";
import { motion } from "framer-motion";

const content = {
  hidden: { opacity: 0, x: "-10vw" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const picContainer = {
  hidden: { opacity: 0, x: "10vw" },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
};

const Banner3 = () => {
  return (
    <div className="container mx-auto pr-14 py-[90px] flex gap-2">
      <motion.div
        variants={content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-[130px] pl-10 mr-14 ml-[90px] border"
      >
        <h2 className="text-4xl font-bold">
          Why do businesses use QR code image to fetch product/payment details?
        </h2>
        <br />
        <p className="pr-14">
          QR codes make it easier for businesses to handle their operations by
          eliminating repetitive manual tasks of adding product information each
          time customers enter your store. QR codes have a versatile nature and
          can help out businesses to store information for multiple purposes.
          They are a great way to bill customers by providing them with a
          payment gateway using a QR code image. Alongside these, many other
          features make the QR scanner a vital part of any business. Vyapar app
          helps you add a QR code within the invoice, and your customer can scan
          it within the device itself to pay you.
        </p>
        </motion.div>

      <motion.div
        variants={picContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="w-30vw h-30vh"
      >
        <img src={qrhome} alt="" srcset="" className="w-[1900px] h-[450px]" />
      </motion.div>
    </div>
  );
};

export default Banner3;
