import React from "react";
import "./Solutions.scss";
import telephone from "./images/telephone.svg";
import cart from "./images/cart.svg";

const Solutions = () => {
  return (
    <section className="solutions container-fluid">
      <div className="solutions__title text-center">
        <h1>Solutions that work for you.</h1>
        <p>
          Brex meets you where you are — and takes you where you want to go.
        </p>
      </div>
      <div className="solutions__main d-flex justify-content-between mt-5">
        <div className="solutions__main__left text-center">
          <h1 className="text-white mt-5">Brex for enterprise.</h1>
          <p className="px-4">
            Easy-to-use corporate cards and spend management software in an
            integrated global solution.
          </p>
          <button type="button" class="btn btn-outline-light">
            Learn more
          </button>
          <div>
            <img src={telephone} alt="" />
          </div>
        </div>
        <div className="solutions__main__right text-center">
          <h1 className="text-black mt-5">Brex for enterprise.</h1>
          <p className="px-4 text-black">
            Easy-to-use corporate cards and spend management software in an
            integrated global solution.
          </p>
          <button type="button" class="d- btn btn-outline-dark">
            Learn more
          </button>
          <div>
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
