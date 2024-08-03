import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import ScanQr from "../pages/ScanQr";

const Footer = () => {
  return (
    <div>
      <footer
        className={`footer footer-center p-10 text-base-content rounded-t-lg flex justify-between bg-[gray] text-white `}
      >
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">
          <p className="font-bold">Inventory Management System</p>
          </a>
           <a href="/generateQr"><p className="font-bold">GenerateQr</p></a>
           <a href="/scanQr"><p className="font-bold">ScanQr</p></a>
        </nav>
        <nav className="pl-5">
          <div className="grid grid-flow-col gap-4">
            <a className="hover:scale-110">
              <span className="cursor-pointer">
                <FaFacebook size={25} />
              </span>
            </a>
            <a className="hover:scale-110">
              <span className="cursor-pointer">
                <FaInstagram size={25} />
              </span>
            </a>
            <a className="hover:scale-110">
              <span className="cursor-pointer">
                <FaLinkedin size={25} />
              </span>
            </a>
            <a className="hover:scale-110">
              <span className="cursor-pointer">
                <FaTwitter size={25} />
              </span>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
