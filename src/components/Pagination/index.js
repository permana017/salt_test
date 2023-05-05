import React from "react";

function Pagination() {
  return (
    <div className="w-full flex justify-between items-center  px-6">
      <div className="text-4xl font-semibold text-[#C0C0C0]">
        <button className="text-4xl font-semibold text-black">01 </button>/
        <button className="text-3xl font-semibold"> 02</button>
      </div>
      <div>
        <button className="p-4 bg-[#F1F1F1]">
          <img
            src={require("../../assets/image/logo/ARROW.png")}
            alt=""
            width={22}
          />
        </button>
        <button className="p-4 bg-[#1BA0E1]">
          <img
            src={require("../../assets/image/logo/ARROW-active.png")}
            alt=""
            //   className="rotate-180"
            width={22}
          />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
