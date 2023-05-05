import React from "react";
import TitleDesc from "../../components/TitleDesc";
import Pagination from "../../components/Pagination";
import { dataTitle } from "../../data/data";

function About() {
  return (
    <div className="container">
      <div className="w-full pb-20 pt-10">
        <div className="w-full carousel rounded-box">
          {dataTitle.map((item, i) => (
            <div className="carousel-item w-full">
              <TitleDesc
                title={item.title}
                subTitle={item.subTitle}
                desc={item.desc}
              />
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default About;
