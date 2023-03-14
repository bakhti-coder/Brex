import React from "react";
import Slider from "react-slick";
import "./Doordash.scss";
import slideLogo from '../Brands/images/doordash.svg'
import slideLogo2 from '../Brands/images/airtable.svg'
import slideLogo3 from "../Brands/images/dell.svg";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Doordash = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="doordash container-fluid my-5">
      <Slider {...settings} className="text-center">
        <div className="doordash-item text-center">
          <img src={slideLogo} alt="" className="mx-auto mb-5" />
          <p className="my-5">
            "DoorDash went from a 100-person startup to over 9,000 employees. We
            needed a solution that was innovative in the T&E space."
          </p>
          <p>— Mike Kim, VP of Finance, DoorDash</p>
        </div>
        <div className="doordash-item text-center">
          <img src={slideLogo2} alt="" className="mx-auto mb-5" />
          <p className="my-5">
            "DoorDash went from a 100-person startup to over 9,000 employees. We
            needed a solution that was innovative in the T&E space."
          </p>
          <p>— Mike Kim, VP of Finance, DoorDash</p>
        </div>
        <div className="doordash-item text-center">
          <img src={slideLogo3} alt="" className="mx-auto mb-5" />
          <p className="my-5">
            "DoorDash went from a 100-person startup to over 9,000 employees. We
            needed a solution that was innovative in the T&E space."
          </p>
          <p>— Mike Kim, VP of Finance, DoorDash</p>
        </div>
      </Slider>
    </section>
  );
};

export default Doordash;
