import React from "react";
import "./style.css";
import bg from "../../assets/image/banner/hero_image.png";

function Banner() {
  return (
    <div className="w-full h-[100vh]">
      <div className="hero relative h-[60vh]">
        <img
          src={require("../../assets/image/banner/sider_1.png")}
          className="w-full absolute z-10 h-[50vh] top-[50vh]"
          alt="banner"
        />
        <img
          src={require("../../assets/image/banner/sider_2.png")}
          className="w-full absolute z-10 h-[50vh] top-[50vh]"
          alt="banner"
        />
      </div>
      <div className="container relative z-20 top-8">
        <div className="w-full p-6">
          <h1 className="text-4xl font-semibold mb-4 text-[#FFFFFF]">
            Discover <br /> Your Wonder
          </h1>
          <p className="text-base font-normal text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
      <div className=" w-full absolute z-40 bottom-[-30px] flex justify-center">
        <img src={require("../../assets/image/logo/Scroll.png")} alt="" />
      </div>
    </div>
  );
}

export default Banner;
