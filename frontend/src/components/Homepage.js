import React from "react";
import homeqr from "../image/homeqr.png";

const Homepage = () => {
  return (
    <div className="container mx-auto px-14 py-[90px] flex gap-5 text-center">
      <div className="">
        <img src={homeqr} alt="" srcset="" className="" />
      </div>
      <div className="mt-[130px]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          dignissimos similique, laboriosam mollitia veniam illo rem aliquam
          natus earum, eum officia expedita recusandae incidunt labore soluta
          eligendi odit aliquid optio! Quia autem voluptatem, id tempore minima
          exercitationem aliquid quo facilis, enim ipsum placeat similique ut.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          dignissimos similique, laboriosam mollitia veniam illo rem aliquam
          natus earum, eum officia expedita recusandae incidunt labore soluta
          eligendi odit aliquid optio! Quia autem voluptatem, id tempore minima
          exercitationem aliquid quo facilis, enim ipsum placeat similique ut.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
