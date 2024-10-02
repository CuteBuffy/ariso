import React, { useState } from "react";
import "./Header.css"

function Header() {
  return (
    <>
      <div className="header__wrapper">
        <div className="header__left">
          <nav className="header__navbar">
            <a className="header__navbar__logo" href="#">
              <img src="./imgs/ariso-logo1.png" alt="ariso logo" />
              <img src="./imgs/ariso-logo2.png" alt="ariso logo2" />
            </a>
            <ul className="header__navbar__links">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>Bestsellers</li>
              </a>
              <a href="#">
                <li>Shop</li>
              </a>
            </ul>
          </nav>
          <img src="./imgs/face-top.png" alt="makeup image" />
        </div>
        <div className="header__right">
          <div className="header__right__top">
            <h2 className="header__right__title">Daily Care with Korean Cosmetics</h2>
            <p className="header__right__desc">Experience the Transformative Benefits of Authentic Korean Skincare for a Radiant and Youthful Complexion"</p>
          </div>
          <div className="header__right__bottom">
            <button className="header__right__bottom__tg">
              <span className="tg__icon__container">
                <img src="./icons/telegram-icon.png" alt="telegram icon" />
              </span>
              <p>Follow the link</p>
            </button>
            <div className="header__right__bottom__search">
              <div className="search__container">
                <input className="search__input" type="text" placeholder="Find the product here" maxLength={30} />
                <button className="search__btn">
                  <img src="./icons/search-icon.png" alt="search icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header