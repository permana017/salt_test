import React from "react";

function TitleDesc({ title, subTitle, desc }) {
  return (
    <div className="w-full px-6">
      <h1 className="text-4xl font-semibold mb-4 text-[#029FE4]">{title}</h1>
      <p className="text-[#000000] text-xl font-medium my-2">{subTitle}</p>
      <p className="text-base font-normal text-[#777777] min-h-[200px] leading-6">
        {desc}
      </p>
    </div>
  );
}

export default TitleDesc;
