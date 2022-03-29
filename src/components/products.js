import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './products.css'
import product1 from "../images/check1.png"
import product2 from "../images/check1.png"
import product3 from "../images/check1.png"
import product4 from "../images/product-4.jpg"
import product5 from "../images/product-5.jpg"
import product6 from "../images/product-6.jpg"
import product7 from "../images/product-7.jpg"
import product8 from "../images/product-8.jpg"

function Products() {
  const config = {
    slidesPerRow: 3,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [settings, setSettings] = useState(config)

  return (
    <div className="container z-index-20 xs-margin-top-80px sm-margin-top-0">
      <div className="row">
        <div className="col-lg-4 sm-margin-top-60px ">
          <div className="row">
            <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12">
              <div className="biolife-banner style-05 biolife-banner__style-05">
                <div className="banner-contain">
                  <div className="media">
                    <a href="#" className="bn-link">
                      <img
                        src={product1}
                        width="197"
                        height="230"
                        alt={product1}
                      />
                    </a>
                  </div>
                  <div className="text-content">
                    <b className="text1">Lorem Ipsum</b>
                    <b className="text-pr">
                      <span>Only:</span>£8.00
                    </b>
                    <a href="#" className="btn btn-shopnow">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-4 col-sm-6 col-xs-12 xs-margin-top-30px sm-margin-top-0 lg-margin-top-30px">
              <div className="biolife-banner style-06 biolife-banner__style-06">
                <div className="banner-contain">
                  <div className="media">
                    <a href="#" className="bn-link">
                      <img
                        src={product2}
                        width="214"
                        height="230"
                        alt={product2}
                      />
                    </a>
                  </div>
                  <div className="text-content">
                    <b className="text1">Lorem Ipsum</b>
                    <b className="text-pr">
                      <span>Only:</span>£8.00
                    </b>
                    <a href="#" className="btn btn-shopnow">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-4 col-sm-12 col-xs-12 xs-margin-top-30px md-margin-top-0 lg-margin-top-30px">
              <div className="biolife-banner style-07 biolife-banner__style-07">
                <div className="banner-contain">
                  <div className="media">
                    <a href="#" className="bn-link">
                      <img
                        src={product3}
                        width="204"
                        height="230"
                        alt={product3}
                      />
                    </a>
                  </div>
                  <div className="text-content">
                    <b className="text1">Lorem Ipsum</b>
                    <b className="text-pr">
                      <span>Only:</span>£18.00
                    </b>
                    <a href="#" className="btn btn-shopnow">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 sm-margin-top-64px">
          <div className="advance-product-box">
            <div className="biolife-title-box bold-style biolife-title-box__bold-style xs-margin-top-80px-im sm-margin-top-0-im lg-margin-bottom-26px-im">
              <h3 className="title">Bestselling Products</h3>
            </div>
            <ul className="products-list biolife-carousel nav-top-right nav-main-color nav-none-on-mobile eq-height-contain">
              <Slider {...settings}>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product4}
                          alt={product4}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product5}
                          alt={product5}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product6}
                          alt={product6}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product7}
                          alt={product7}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product8}
                          alt={product8}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product4}
                          alt={product4}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product5}
                          alt={product5}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product6}
                          alt={product6}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product7}
                          alt={product7}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                          Packham's Pears
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="product-item">
                  <div className="contain-product layout-default">
                    <div className="product-thumb">
                      <a href="#" className="link-to-product">
                        <img
                          src={product8}
                          alt={product8}
                          width="270"
                          height="270"
                          className="product-thumnail"
                        />
                      </a>
                      <a className="lookup btn_call_quickview" href="#">
                        <i className="biolife-icon icon-search"></i>
                      </a>
                    </div>
                    <div className="info">
                      <b className="categories">Lorem Ipsum</b>
                      <h4 className="product-title">
                        <a href="#" className="pr-name">
                        Lorem Ipsum Lorem Ipsum
                        </a>
                      </h4>
                      <div className="price ">
                        <ins>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>85.00
                          </span>
                        </ins>
                        <del>
                          <span className="price-amount">
                            <span className="currencySymbol">£</span>95.00
                          </span>
                        </del>
                      </div><div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                      <div className="slide-down-box">
                        <div className="buttons">
                          <a href="#" className="btn wishlist-btn">
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a>
                          <a href="#" className="btn add-to-cart-btn">
                            <i
                              className="fa fa-cart-arrow-down"
                              aria-hidden="true"
                            ></i>
                            add to cart
                          </a>
                          <a href="#" className="btn compare-btn">
                            <i className="fa fa-random" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
