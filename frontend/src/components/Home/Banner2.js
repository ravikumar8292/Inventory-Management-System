import React from "react";
import qrhome from "../../image/scan-qr-code.webp";
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

const Banner2 = () => {
  return (
    <div className="container mx-auto pl-14 py-[90px] flex gap-2">
      <motion.div
        variants={content}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="ml-12"
      >
        <img src={qrhome} alt="" srcset="" className="w-[1500px] h-[450px]" />
      </motion.div>

      <motion.div
        variants={picContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-[130px] px-14 ml-[90px]"
      >
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
      </motion.div>
    </div>
  );
};

export default Banner2;
