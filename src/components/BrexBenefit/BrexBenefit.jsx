import React from "react";
import "./BrexBenefit.scss";
import image from "./images/IMAGE.svg";

const BrexBenefit = () => {
  return (
    <section className="brx">
      <div className="brex container-fluid d-flex justify-content-around align-items-center ">
        <div className="brex__left">
          <h1 className="my-4">See what Brex can do for you.</h1>
          <p className="my-5">
            Get in touch to learn how our spend solution <br /> can increase financial
            efficiency and speed for <br /> your company.
          </p>
          <button className="btns">Contact sales</button>
          <button className="btn btn-outline-dark m-5">Open an account</button>
        </div>
        <div className="brex__right">
          <img src={image} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  );
};

export default BrexBenefit;
