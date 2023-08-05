import React from "react";
import { Title } from "./common/Title";
import { brand } from "@/assets/data/dummydata";
import Slider from "react-slick";

const Brand = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <section className="brand">
        <div className="container">
          <div className="heading-title">
            <Title title="WE ARE PROUD TO WORK WITH THESE COMPANIES" />
          </div>
          <div className="brand-content grid-6 py">

              {brand.map((item) => (
                <div className="images" key={item.id} style={{}}>
                  <img
                    src={item.cover}
                    alt={item.id}
                    width="100%"
                    height="100%"
                  />
                </div>
              ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
