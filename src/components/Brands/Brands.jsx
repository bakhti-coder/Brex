import React from "react";
import './Brands.scss'
import doordash from "./images/doordash.svg";
import scale from "./images/scale.svg";
import airtable from "./images/airtable.svg";
import whatnot from "./images/whatnot.svg";
import classpass from "./images/classpass.svg";
import dell from "./images/dell.svg";
import airbnb from "./images/airbnb.svg";

const Brands = () => {
  return (
    <section className="brands container-fluid my-5 d-flex justify-content-between ">
      <img style={{cursor: "pointer"}} src={doordash} alt="" />
      <img style={{cursor: "pointer"}} src={scale} alt="" />
      <img style={{cursor: "pointer"}} src={airtable} alt="" />
      <img style={{cursor: "pointer"}} src={whatnot} alt="" />
      <img style={{cursor: "pointer"}} src={classpass} alt="" />
      <img style={{cursor: "pointer"}} src={dell} alt="" />
      <img style={{cursor: "pointer"}} src={airbnb} alt="" />
    </section>
  );
};

export default Brands;
