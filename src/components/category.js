import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-tabs/style/react-tabs.css"
import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"
import image4 from "../images/4.jpg"
import image5 from "../images/5.jpg"

function Category() {
  const [tabIndex, setTabIndex] = useState(0)
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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

  return (
    <div className="product-tab z-index-20 sm-margin-top-59px xs-margin-top-20px">
      <div className="container">
        <div className="row">
          
          <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <div className="ecom-title-box slim-item">
            <p style={{ float: "left", color: "#222", fontSize: "24px", fontWeight: "bold" }}>Our Products</p>
            <TabList>
              <Tab>Category 1</Tab>
              <Tab>Category 2</Tab>
            </TabList>
          </div>
          
            <TabPanel>
            <ul class="products-list ecom-carousel nav-center-02 nav-none-on-mobile eq-height-contain">             
                 <Slider {...settings}>

                  <div>
                    <li class="product-item">
                      <div class="contain-product layout-default">
                        <div class="product-thumb">
                          <a href="#" class="link-to-product">
                            <img
                              src={image1}
                              alt={image1}
                              width="270"
                              height="270"
                              class="product-thumnail"
                            />
                          </a>
                          <a class="lookup btn_call_quickview" href="#">
                            <i class="ecom-icon icon-search"></i>
                          </a>
                        </div>
                        <div class="info">
                          <b class="categories">Lorem Ipsum</b>
                          <h4 class="product-title">
                            <a href="#" class="pr-name">
                              Lorem Ipsum
                            </a>
                          </h4>
                          <div class="price ">
                            <ins>
                              <span class="price-amount">
                                <span class="currencySymbol">£</span>85.00
                              </span>
                            </ins>
                            <del>
                              <span class="price-amount">
                                <span class="currencySymbol">£</span>95.00
                              </span>
                            </del>
                          </div>
                          <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                          <div class="slide-down-box">
                            <div class="buttons">
                              <a href="#" class="btn wishlist-btn">
                                <i class="fa fa-heart" aria-hidden="true"></i>
                              </a>
                              <a href="#" class="btn add-to-cart-btn">
                                <i
                                  class="fa fa-cart-arrow-down"
                                  aria-hidden="true"
                                ></i>
                                add to cart
                              </a>
                              <a href="#" class="btn compare-btn">
                                <i class="fa fa-random" aria-hidden="true"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image2}
                            alt={image2}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                      <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image3}
                            alt={image3}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image4}
                            alt={image4}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image5}
                            alt={image5}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image5}
                            alt={image5}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                
              </Slider></ul>
            </TabPanel>
            <TabPanel>
            <ul class="products-list ecom-carousel nav-center-02 nav-none-on-mobile eq-height-contain">             
                 <Slider {...settings}>

                  
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image2}
                            alt={image2}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                      <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image3}
                            alt={image3}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image4}
                            alt={image4}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                              <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image5}
                            alt={image5}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                  <div>
                  <li class="product-item">
                    <div class="contain-product layout-default">
                      <div class="product-thumb">
                        <a href="#" class="link-to-product">
                          <img
                            src={image5}
                            alt={image5}
                            width="270"
                            height="270"
                            class="product-thumnail"
                          />
                        </a>
                        <a class="lookup btn_call_quickview" href="#">
                          <i class="ecom-icon icon-search"></i>
                        </a>
                      </div>
                      <div class="info">
                        <b class="categories">Lorem Ipsum</b>
                        <h4 class="product-title">
                          <a href="#" class="pr-name">
                          Lorem Ipsum
                          </a>
                        </h4>
                        <div class="price ">
                          <ins>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>85.00
                            </span>
                          </ins>
                          <del>
                            <span class="price-amount">
                              <span class="currencySymbol">£</span>95.00
                            </span>
                          </del>
                        </div>
                        <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="ratings-val"></div>
                                        </div>
                                        <span class="ratings-text">( 4 Reviews )</span>
                                    </div>
                        <div class="slide-down-box">
                          <div class="buttons">
                            <a href="#" class="btn wishlist-btn">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </a>
                            <a href="#" class="btn add-to-cart-btn">
                              <i
                                class="fa fa-cart-arrow-down"
                                aria-hidden="true"
                              ></i>
                              add to cart
                            </a>
                            <a href="#" class="btn compare-btn">
                              <i class="fa fa-random" aria-hidden="true"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    </li>
                  </div>
                
              </Slider></ul>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Category
