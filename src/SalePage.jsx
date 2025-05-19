import React from "react";
import "./SalePage.css";

import thumb1 from "./Assets/coat5.jpg";
import thumb2 from "./Assets/coat1.jpg";
import thumb3 from "./Assets/coat3.jpg";
import thumb4 from "./Assets/coat4.jpg";
import thumb5 from "./Assets/coat.jpg";
import thumb6 from "./Assets/coat6.jpg";
import thumb7 from "./Assets/coat7.jpg";

import mainImage from "./Assets/coat5.jpg";

import sizeImg1 from "./Assets/CartCoat.jpg";
import sizeImg2 from "./Assets/CartCoat.jpg";

const SalePage = () => {
  const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7];
  const sizes = ["M", "L", "XL"];
  const sizeImages = [sizeImg1, sizeImg2];

  return (
    <div className="sale-container">
      <div className="top-banner">
<div className="timer">
  <strong className="time">02D</strong>
  <span>
    <strong>02</strong> <span className="time-label">hrs</span> :
    <strong>50</strong> <span className="time-label">min</span>
    <span className="sec-label"> sec</span>
  </span>
</div>

        <div className="promo-text">Up to 50% Off: Unbeatable Sale</div>
        <div className="shop-now">SHOP NOW</div>
      </div>

      <header className="main-header">
        <nav className="nav-left">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Women</a>
          <a href="#">Men</a>
        </nav>
        <div className="logo">KARE</div>
        <nav className="nav-right">
          <a href="#">Search</a>
          <a href="#">Cart (3)</a>
        </nav>
      </header>

      <div className="product-page">
        <div className="thumbnails">
          {thumbnails.map((thumb, index) => (
            <img key={index} src={thumb} alt={`thumb-${index + 1}`} className="thumb-img" />
          ))}
        </div>

        <div className="main-image">
          <img src={mainImage} alt="main-product" />
        </div>

        <div className="product-details">
          <h2>Graphic Tee VI</h2>
          <p className="price">Rs.1850</p>
          <p className="stock">2 in Stock. Ready to Ship</p>

          {/* Size Images Row */}
          <div className="size-image-row">
            {sizeImages.map((img, index) => (
              <img key={index} src={img} alt={`size-img-${index + 1}`} className="size-img" />
            ))}
          </div>

          {/* Size Labels Row */}
          <div className="size-labels-row">
            {sizes.map((size, index) => (
              <div key={index} className="size-label">{size}</div>
            ))}
          </div>

          <div className="size-guide">SIZE GUIDE</div>

          <button className="add-to-cart">ADD TO CART</button>

          <p className="description">
            Find the perfect layer in our women's jacket collection. These jackets are designed for everyday wear, offering both style and practicality. From classic denim to cozy puffers each piece is easy to pair with any outfit, making them a versatile addition to your wardrobe.
          </p>

          <div className="info-links">
            <p>FABRIC & CARE</p>
            <p>SHIPPING EXCHANGE & RETURNS</p>
          </div>

          <div className="you-may-also-like">
            <p>You May Also Like</p>
            <div className="arrows">
              <span>&larr;</span>
              <span>&rarr;</span>
            </div>
          </div>
            <div className="you-may-images">
    <img src={thumb1} alt="suggested-1" className="suggested-img" />
    <img src={thumb2} alt="suggested-2" className="suggested-img" />
  </div>
        </div>
      </div>
    </div>
  );
};

export default SalePage;
