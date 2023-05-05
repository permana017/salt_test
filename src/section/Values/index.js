import React from "react";
import { sectionValue } from "../../data/data";

function Values() {
  return (
    <div className="bg-[#F8F8F8] ">
      <div className="container flex flex-col">
        <div className="w-full">
          <h1 className="text-4xl font-semibold mb-4 mt-12 text-[#029FE4] text-center">
            Our Core Values
          </h1>
          <p className="text-base font-normal text-[#777777]  leading-6">
            Ridiculus laoreet libero pretium et, sit vel elementum convallis
            fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus
            etiam sit.
          </p>
          <p className="text-base font-normal text-[#777777] mt-10 leading-6">
            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae,
            nec amet enim.
          </p>
        </div>
        <div className="mt-16 flex flex-col">
          {sectionValue.map((item, i) => (
            <div className="w-ful flex justify-between mb-6">
              <div className="border-b-[3px] border-[#F8F8F8] w-[44px] mr-5">
                <hr class="w-full h-1 mt-4 bg-[#747474] border-0" />
              </div>
              <div className="">
                <p className="text-2xl font-medium">{item.title}</p>
                <p className="text-base font-normal text-[#777777] leading-6">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img
          src={require("../../assets/image/banner/image-values.png")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Values;
