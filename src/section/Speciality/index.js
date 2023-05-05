import React from "react";

function Sepeciality() {
  return (
    <div className="w-full flex justify-center bg-[#509FDD] py-10">
      <div className="container">
        <div className="relative bg-white w-full  px-8 z-10">
          <div className=" py-10">
            <h1 className="text-2xl font-semibold mb-4 text-[#029FE4]">
              OUR SPECIALITY
            </h1>
            <p className="text-base font-normal leading-6 mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              euismod libero vel leo auctor, in venenatis nulla consequat. Sed
              commodo nunc sit amet congue aliquam.
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="carousel carousel-center space-x-4 rounded-box">
              <div className="carousel-item">
                <div className="flex flex-col w-full mr-10">
                  <img
                    src={require("../../assets/image/banner/exhoust.png")}
                    alt=""
                    width={177}
                    height={177}
                  />
                  <p className="text-base font-semibold my-4 leading-6 text-center">
                    Exhoust
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="flex flex-col w-full mr-10">
                  <img
                    src={require("../../assets/image/banner/speed_improvment.png")}
                    alt=""
                    width={177}
                    height={177}
                  />
                  <p className="text-base font-semibold my-4 leading-6 text-center">
                    Seep Improvement
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="flex flex-col w-full mr-10">
                  <img
                    src={require("../../assets/image/banner/accesoris.png")}
                    alt=""
                    width={177}
                    height={177}
                  />
                  <p className="text-base font-semibold my-4 leading-6 text-center">
                    Accesoris
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base font-normal text-[#A7A7A7]  leading-6 text-center my-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              euismod libero vel leo auctor, in venenatis nulla consequat. Sed
              commodo nunc sit amet congue aliquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sepeciality;
