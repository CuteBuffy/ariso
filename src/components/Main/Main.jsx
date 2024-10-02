import React, { useState } from "react"
import "./Main.css"

function Main() {
  return (
    <>
      <section className="main__section__1">
        <div className="main__aboutus">
          <p className="main__aboutus__number">1</p>
          <div className="main__aboutus__info">
            <h3 className="main__aboutus__title">We carefully select</h3>
            <p className="main__aboutus__desc">only the best cosmetics from trusted Korean brands so that you can enjoy high-quality products that truly work.</p>
          </div>
        </div>
        <img className="main__section__1__circle" src="./imgs/main-circle.png" alt="circle image" />
        <p className="main__section__middle__title">About Us</p>
        <div className="main__aboutus">
          <p className="main__aboutus__number">2</p>
          <div className="main__aboutus__info">
            <h3 className="main__aboutus__title">Our range includes</h3>
            <p className="main__aboutus__desc">a wide selection of skincare, haircare, and makeup products, as well as unique new arrivals that you won’t find anywhere else.</p>
          </div>
        </div>
      </section>
      <section className="main__section__2">
        <h3 className="main__section__2__title">Our range includes</h3>
        <div className="main__section__2__range__container">
          <div className="main__section__2__range">
            <a href="#">Masks</a>
            <a className="active" href="#">Creams</a>
            <a href="#">Serums</a>
            <a href="#">Skin care</a>
          </div>
        </div>
        <div className="main__section__2__showcase__container">
          <div className="main__section__2__item">
            <img src="./imgs/range1.png" alt="best skin days" />
            <span className="main__section__2__item__sale">Sale</span>
            <div className="main__section__2__item__info">
              <h3 className="main__section__2__item__title">
                Best Skin Days
              </h3>
              <p className="main__section__2__item__price">20$</p>
            </div>
          </div>
          <div className="main__section__2__item">
            <img src="./imgs/range2.png" alt="best skin days" />
            <div className="main__section__2__item__info">
              <h3 className="main__section__2__item__title">
                MARBLE CREAMS
              </h3>
              <p className="main__section__2__item__price">31$</p>
            </div>
          </div>
          <div className="main__section__2__item">
            <img src="./imgs/range3.png" alt="best skin days" />
            <div className="main__section__2__item__info">
              <h3 className="main__section__2__item__title">
                FARMENT CREAM
              </h3>
              <p className="main__section__2__item__price">19$</p>
            </div>
          </div>
          <div className="main__section__2__item">
            <img src="./imgs/range4.png" alt="best skin days" />
            <div className="main__section__2__item__info">
              <h3 className="main__section__2__item__title">
                TOBACCO VANILLA
              </h3>
              <p className="main__section__2__item__price">23$</p>
            </div>
          </div>
        </div>
      </section>
      <section className="main__section__3">
        <div className="main__section__3__top">
          <p className="main__section__3__top__desc">categories</p>
          <p className="main__section__3__top__title">Select section</p>
        </div>
        <div className="main__section__3__showcase">
          <div className="section__1">
            <div className="relative section__1__top">
              <p className="showcase__desc">Skin care</p>
              <button className="main__black__arrow">
                <img src=".//icons/arrow-black.png" alt="white arrow" />
              </button>
              <img src="./imgs/select1.png" alt="Skin care" />
            </div>
            <div className="relative section__1__bottom">
              <p className="showcase__desc">Blog/Articles</p>
              <img src="./imgs/select2.png" alt="Blog/Articles" />
            </div>
          </div>
          <div className="relative section__middle">
            <p className="showcase__desc">Reviews</p>
            <button className="main__black__arrow">
              <img src="./icons/arrow-black.png" alt="black arrow" />
            </button>
            <img src="./imgs/select3.png" alt="Reviews" />
          </div>
          <div className="relative section__2">
            <div className="relative section__2__top">
              <p className="showcase__desc">Natural cosmetics</p>
              <button className="main__black__arrow">
                <img src="./icons/arrow-black.png" alt="black arrow" />
              </button>
              <img src="./imgs/select4.png" alt="natural cosmetics" />
            </div>
            <div className="section__2-2">
              <div className="relative section__2-2__left">
                <p className="showcase__desc">Accessories</p>
                <img src="./imgs/select5.png" alt="Accessories" />
                <button className="main__black__arrow">
                  <img src="./icons/arrow-black.png" alt="black arrow" />
                </button>
              </div>
              <div className="relative section__3__showcase__more">
                <p className="showcase__more__title">See more details</p>
                <button className="arrow__white">
                  <img src="./icons/arrow-white.png" alt="white arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lowermargin main__section__4">
        <div className="main__section__4__top">
          <p className="main__section__4__desc">your beauti</p>
          <hr className="main__section__4__br" />
        </div>
        <div className="main__section__4__info">
          <p className="main__section__4__info__title">Our Advantages</p>
          <div className="advantages__container">
            <div className="advantage">
              <span className="advantage__icon">
                <img src="./icons/advantage1.png" alt="Advantage 1" />
              </span>
              <h3 className="advantage__title">Authentic Products</h3>
              <p className="advantage__desc">We offer only certified, high-quality Korean cosmetics.</p>
            </div>
            <div className="advantage">
              <span className="advantage__icon">
                <img src="./icons/advantage2.png" alt="Advantage 1" />
              </span>
              <h3 className="advantage__title">Fast Delivery</h3>
              <p className="advantage__desc">You can get your favorite products fast.</p>
            </div>
            <div className="advantage">
              <span className="advantage__icon">
                <img src="./icons/advantage3.png" alt="Advantage 1" />
              </span>
              <h3 className="advantage__title">Regular Promotions</h3>
              <p className="advantage__desc">Ongoing discounts and special offers for our customers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="lowermargin main__section__5">
        <div className="relative main__section__5__container">
          <div className="black__overlay">

          </div>
          <img src="./imgs/footer-img.png" alt="Notifications Question Image" />
          <div className="main__section__5__info">
            <div className="main__section__5__info__top">
              <h3 className="main__section__5__info__title">Would you like</h3>
              <p className="main__section__5__info__desc">to receive notifications about discounts?</p>
            </div>
            <div className="main__section__5__info__bottom">
              <input className="main__section__5__input" placeholder="revive@gmail.com..." type="text" />
              <button className="main__section__5__button">
                <img src="./icons/email-icon.png" alt="Email Icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main