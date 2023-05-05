import React from "react";

function Navbar() {
  return (
    <div className="bg-white w-full h-[60px] flex justify-center fixed top-0 z-50">
      <div className="container h-full">
        <div className="h-full w-full flex items-center justify-between">
          <img
            src={require("../../assets/image/logo/logo_company.png")}
            alt="logo"
            width={160}
            height={31}
          />
          <img
            src={require("../../assets/image/logo/burger.png")}
            alt="logo"
            width={19}
            height={12}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
