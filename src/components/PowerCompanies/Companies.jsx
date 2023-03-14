import React from 'react'
import './Compaines.scss'
import logo1 from './images/logo1.svg'
import logo2 from './images/logo2.svg'
import logo3 from "./images/logo3.svg";
import logo4 from "./images/logo4.svg";
import logo5 from "./images/logo5.svg";
import logo6 from "./images/logo6.svg";
import logo7 from "./images/logo7.svg";

const Companies = () => {
  return (
    <section>
      <div className="container-fluid">
        <h1 className="text-center my-5">
          How our customers use Brex to power their companies.
        </h1>
        <div className="compaines__card d-flex justify-content-between align-items-center">
          <div className="compaines__card__item">
            <img src={logo1} alt="" />
            <div className="compaines__card__body">
              <p className="my-4">
                Empire enables spend and drives <br /> accountability in
                Orangetheory <br />
                studios with Brex Empower.
              </p>
              <p className="">
                <a href="#" className="text-warning">
                  Read case study {"->"}
                </a>
              </p>
            </div>
          </div>
          <div className="compaines__card__item">
            <img src={logo2} alt="" />
            <div className="compaines__card__body">
              <p className="my-4">
                Empire enables spend and drives <br /> accountability in
                Orangetheory <br />
                studios with Brex Empower.
              </p>
              <p className="">
                <a href="#" className="text-warning">
                  Read case study {"->"}
                </a>
              </p>
            </div>
          </div>
          <div className="compaines__card__item">
            <img src={logo3} alt="" />
            <div className="compaines__card__body">
              <p className="my-4">
                Empire enables spend and drives <br /> accountability in
                Orangetheory <br />
                studios with Brex Empower.
              </p>
              <p className="">
                <a href="#" className="text-warning">
                  Read case study {"->"}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="compaines__brands d-flex justify-content-between align-items-center my-5">
          <div className="compaines__brands__logo"> <img src={logo4} alt="" /> </div>
          <div className="compaines__brands__logo"> <img src={logo5} alt="" /> </div>
          <div className="compaines__brands__logo"> <img src={logo6} alt="" /> </div>
          <div className="compaines__brands__logo"> <img src={logo7} alt="" /> </div>
        </div>
      </div>
    </section>
  );
}

export default Companies