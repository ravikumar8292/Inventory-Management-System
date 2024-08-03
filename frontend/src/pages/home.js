import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Banner2 from "../components/Home/Banner2";
import Banner3 from "../components/Home/Banner3";

const home = () => {
  return (
    <div className="bg-[#E6E6E6]">
      <Navbar />
      <Banner />
      <Banner2 />
      <Banner3 />
      {/* <div className="fixed top-[648px] w-full"> */}
        <Footer />
      {/* </div> */}
    </div>
  );
};

export default home;
