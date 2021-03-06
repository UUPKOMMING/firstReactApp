import React from "react";
import logo from "../logo.svg";

const Customheader = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} className="header__App-logo" alt="logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <a href='https://github.com' className='btn btn--white btn--animated'>Discover our tours</a>
      </div>
    </header>
  );
};

export default Customheader;
