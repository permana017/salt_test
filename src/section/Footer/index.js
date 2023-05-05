import React from "react";

function Footer() {
  return (
    <div className="w-full bg-[#07477A] h-[80vh] relative flex flex-col items-center">
      <div className="container">
        <div className="mt-10 relative z-10">
          <img
            src={require("../../assets/image/logo/company-footer.png")}
            alt=""
            className="mb-8"
          />
          <div className="bg-[#FFFFFF] p-7">
            <select className="select select-bordered w-full text-[#00537C] font-semibold">
              <option disabled selected>
                TECHNOLOGY DEPARTMENT
              </option>
              <option>Han Solo</option>TECHNOLOGY DEPARTMENT
              <option>Greedo</option>
            </select>
            <div className="w-full mt-12">
              <p className="text-[#25A0D8] text-lg w-[55%] mb-5 min-w-[200px]">
                Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung,
                Jawa Barat
              </p>
            </div>
          </div>
          <div className="text-[#FFFFFF] text-base mt-7">
            <p className="my-4 ">Who We Are</p>
            <p className="my-4">Our Values</p>
            <p className="my-4">The Perks</p>
          </div>
        </div>
      </div>
      <img
        src={require("../../assets/image/banner/banner-footer.png")}
        alt=""
        className="absolute bottom-0"
      />
    </div>
  );
}

export default Footer;
