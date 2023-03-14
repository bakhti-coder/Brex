import React from "react";
import "./Flexible.scss";
import image from "./IMAGE.svg";

const Flexible = () => {
  return (
    <section className="create">
      <div className="create-buget container-fluid">
        <div className="create-buget__title">
          <h1 className="">Flexible spend limits for any need.</h1>
          <p>
            Enable spend for any purpose — from travel to stipends to
            procurements — at all levels of your company. All on one card. With
            controls built in. That's the magic of budgets.
          </p>
          <button className="btn btn-outline-dark">See how budgets work</button>
        </div>
        <div className="create-buget__img text-center">
          <img src={image} alt="" style={{width: '100%'}} />
        </div>
      </div>
    </section>
  );
};

export default Flexible;
