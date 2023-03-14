import React from "react";
import "./Footer.scss";
import logo from "./images/logo.svg";
import facebook from "./images/facebook.svg";
import YouTube from "./images/youTube.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import twitter from "./images/twiter.svg";
import appStor from "./images/appStor.svg";
import playMarket from "./images/playMarket.svg";

const Footer = () => {
  return (
    <footer className="ftr">
      <div className="container-fluid footer">
        <div className="footer__menu d-flex justify-content-between">
          <div className="footer__menu__logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="footer__menu__product">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Business account</a>
              </li>
              <li>
                <a href="#">Credit card</a>
              </li>
              <li>
                <a href="#">Rewards</a>
              </li>
              <li>
                <a href="#">Financial modeling</a>
              </li>
              <li>
                <a href="#">Expense tracking</a>
              </li>
              <li>
                <a href="#">Spend management</a>
              </li>
              <li>
                <a href="#">Bill pay</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Brex API</a>
              </li>
              <li>
                <a href="#">Pro access</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu__company">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Brex</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer__menu__resources">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Legal agreement</a>
              </li>
              <li>
                <a href="#">Cookie preferences</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__logos d-flex align-items-center mt-5 ">
        <div className="footer__logos__img d-flex">
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            className="mx-3"
          >
            {" "}
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.youtube.com/" target={"_blank"} className="mx-3">
            <img src={YouTube} alt="" />
          </a>
          <a
            href="https://www.instagram.com/"
            target={"_blank"}
            className="mx-3"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target={"_blank"}
            className="mx-3"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="https://twitter.com/" target={"_blank"} className="mx-3">
            <img src={twitter} alt="" />
          </a>
        </div>
        <div className="footer__logos__playStore d-flex mx-auto ">
          <a href="https://www.apple.com/ru/app-store/" target={"_blank"}>
            <img src={appStor} alt="" />
          </a>
          <a
            className="mx-5"
            href="https://play.google.com/store/apps?hl=ru&gl=US"
            target={"_blank"}
          >
            <img src={playMarket} alt="" />
          </a>
        </div>
      </div>
      <div className="footer__text p-4">
        <p>
          ©2022 Brex Inc. (“Brex”) and the Brex logo are registered trademarks. <br /> <br />
          Brex Inc. provides the Brex Mastercard® Corporate Credit Card, issued
          by Emigrant Bank, Member FDIC or Fifth Third Bank, NA., Member FDIC.
          Use of Brex’s user data access application programming interfaces is
          subject to the Brex Access Agreement . <br /> <br /> Use of Brex Empower and other
          Brex products is subject to the Brex Treasury LLC (“Brex Treasury”) is
          an affiliate of Brex and a member of FINRA and SIPC that provides Brex
          Cash, an account that allows customers to sweep uninvested cash
          balances into certain money market mutual funds or FDIC-insured bank
          accounts at Brex’s partner banks, such as JPMorgan Chase Bank, Member
          FDIC. A list of partner banks is available at
          https://www.brex.com/legal . <br /> <br /> Investing in securities products involves
          risk and you could lose money. Brex Treasury is not a bank nor an
          investment adviser and your Brex Cash account is not an FDIC-insured
          bank account. *Your account earns yield on an annual basis. The figure
          shown here is an estimate of the annualized yield based on the average
          performance of the past seven days.* Yield is variable and fluctuates.
          Carefully consider a fund's investment objectives, risks, charges and
          expenses, as described in the applicable mutual fund’s prospectus.
          Contact us for a copy of the fund prospectus. Past performance does
          not guarantee future results, which may vary. <br /> <br /> SIPC currently protects
          the assets in each of your securities accounts at Brex Treasury up to
          $500,000 (including $250,000 for claims for cash). Please see This is
          not an offer, solicitation of an offer, recommendation or advice to
          buy or sell any security, financial product, instrument or to open a
          brokerage account in any jurisdiction where Brex Treasury is not
          registered. Review the background of Brex Treasury or its investment
          professionals on for important legal disclosures. Deposit Sweep
          Program Disclosure <br /> <br /> Statement Brex does not provide, nor does it
          guarantee, any third-party product, service, information, or
          recommendation and may pay third parties and/or be paid by them for
          customer referrals. <br /> <br /> Services may be provided by Brex Payments LLC
          (NMLS #2035354).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
