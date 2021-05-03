import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={637}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            id="49537894"
            title="Full Touch Large HD Color Display Smart Watch, 8 Days Battery Life, IP67 Waterpoof"
            price={45900}
            image="https://m.media-amazon.com/images/I/61MKnhvNUgS._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49838501"
            title="Samsung 27-inch WQHD Curved Gaming Monitor"
            price={25660}
            image="https://m.media-amazon.com/images/I/71ytMOWT5OL._AC_UY218_.jpg"
            rating={4} />

          <Product
            id="83436367"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker"
            price={3449}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg"
            rating={5} />

          <Product
            id="52367885"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 512GB)"
            price={111055}
            image="https://m.media-amazon.com/images/I/811aBwuSuIL._AC_UY218_.jpg"
            rating={4} />
        </div>

        <div className="home__row">
          <Product
            id="35968506"
            title="Samsung 163 cm (65 inches) Q Series QA65Q8CNAK 4K LED Smart TV (Black)"
            price={25660}
            image="https://m.media-amazon.com/images/I/91i6SX47ClL._AC_UY218_.jpg"
            rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;
