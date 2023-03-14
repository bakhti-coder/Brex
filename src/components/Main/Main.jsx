import React from 'react'
import './Main.scss'
import image from './images/IMAGE.png' 

const Main = () => {
  return (
    <section className="container-fluid">
      <div className="main__sct d-flex justify-content-between align-items-center">
        <div className="main__sct__left w-50">
          <h1>Corporate cards and spend management teams actually love.</h1>
          <div className="main__sct__left__btns my-5">
            <button className="btns">Contact sales</button>
            <button className="btn btn-outline-dark p-2 ms-4">
              Open an account
            </button>
          </div>
          <hr />
          <div className="main__sct__left__text my-5">
            <h5 className="fs-5 fw-normal">Brex for enterprise</h5>
            <p>
              Easy-to-use corporate cards and spend management software in an
              integrated global solution.
            </p>
            <p>
              <a href="#" className="text-warning">
                Learn more {"->"}
              </a>{" "}
            </p>
          </div>
          <hr />
          <div className="main__sct__left__text my-5">
            <h5 className="fs-5 fw-normal">Brex for enterprise</h5>
            <p>
              Easy-to-use corporate cards and spend management software in an
              integrated global solution.
            </p>
            <p>
              <a href="#" className="text-warning">
                Learn more {"->"}
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="main__sct__right">
          <img src={image} alt=""  />
        </div>
      </div>
    </section>
  );
}

export default Main