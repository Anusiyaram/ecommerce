import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./banner.css"
import banner1 from "../images/slider1.jpg";
import banner2 from "../images/slider2.jpg";

function Banner() {
 
  return (
    <div className="container">
          
          <div className="row">
            <div className="col-lg-3 col-md-4 hidden-sm hidden-xs">
              <div className="ecom-vertical-menu none-box-shadow  ">
                <div className="vertical-menu vertical-category-block always ">
                  <div className="block-title">
                    <span className="menu-icon">
                      <span className="line-1"></span>
                      <span className="line-2"></span>
                      <span className="line-3"></span>
                    </span>
                    <span className="menu-title">All departments</span>
                    <span
                      className="angle"
                      data-tgleclassName="fa fa-caret-down"
                    >
                      <i className="fa fa-caret-up" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="wrap-menu">
                    <ul className="menu clone-main-menu">
                      <li className="menu-item menu-item-has-children has-megamenu">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Fruit & Nut Gifts"
                        >
                          <i className="ecom-icon icon-fruits"></i>Fruit &
                          Nut Gifts
                        </a>
                        <div className="wrap-megamenu lg-width-900 md-width-640">
                          <div className="mega-content">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                                <div className="wrap-custom-menu vertical-menu">
                                  <h4 className="menu-title">Fresh Fuits</h4>
                                  <ul className="menu">
                                    <li>
                                      <a href="#">Fruit & Nut Gifts</a>
                                    </li>
                                    <li>
                                      <a href="#">Mixed Fruits</a>
                                    </li>
                                    <li>
                                      <a href="#">Oranges</a>
                                    </li>
                                    <li>
                                      <a href="#">Bananas & Plantains</a>
                                    </li>
                                    <li>
                                      <a href="#">Fresh Gala Apples</a>
                                    </li>
                                    <li>
                                      <a href="#">Berries</a>
                                    </li>
                                    <li>
                                      <a href="#">Pears</a>
                                    </li>
                                    <li>
                                      <a href="#">Produce</a>
                                    </li>
                                    <li>
                                      <a href="#">Snack Foods</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children has-megamenu">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Vegetables"
                        >
                          <i className="ecom-icon icon-broccoli-1"></i>
                          Vegetables
                        </a>
                        <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-01">
                          <div className="mega-content">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                                <div className="wrap-custom-menu vertical-menu">
                                  <h4 className="menu-title">Vegetables</h4>
                                  <ul className="menu">
                                    <li>
                                      <a href="#">Fruit & Nut Gifts</a>
                                    </li>
                                    <li>
                                      <a href="#">Mixed Fruits</a>
                                    </li>
                                    <li>
                                      <a href="#">Oranges</a>
                                    </li>
                                    <li>
                                      <a href="#">Bananas & Plantains</a>
                                    </li>
                                    <li>
                                      <a href="#">Fresh Gala Apples</a>
                                    </li>
                                    <li>
                                      <a href="#">Berries</a>
                                    </li>
                                    <li>
                                      <a href="#">Pears</a>
                                    </li>
                                    <li>
                                      <a href="#">Produce</a>
                                    </li>
                                    <li>
                                      <a href="#">Snack Foods</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children has-megamenu">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Fresh Berries"
                        >
                          <i className="ecom-icon icon-grape"></i>Fresh
                          Berries
                        </a>
                        <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-02">
                          <div className="mega-content">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25">
                                <div className="wrap-custom-menu vertical-menu">
                                  <h4 className="menu-title">Fresh Berries</h4>
                                  <ul className="menu">
                                    <li>
                                      <a href="#">Fruit & Nut Gifts</a>
                                    </li>
                                    <li>
                                      <a href="#">Mixed Fruits</a>
                                    </li>
                                    <li>
                                      <a href="#">Oranges</a>
                                    </li>
                                    <li>
                                      <a href="#">Bananas & Plantains</a>
                                    </li>
                                    <li>
                                      <a href="#">Fresh Gala Apples</a>
                                    </li>
                                    <li>
                                      <a href="#">Berries</a>
                                    </li>
                                    <li>
                                      <a href="#">Pears</a>
                                    </li>
                                    <li>
                                      <a href="#">Produce</a>
                                    </li>
                                    <li>
                                      <a href="#">Snack Foods</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Ocean Foods"
                        >
                          <i className="ecom-icon icon-fish"></i>Ocean Foods
                        </a>
                      </li>
                      <li className="menu-item menu-item-has-children has-child">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Butter & Eggs"
                        >
                          <i className="ecom-icon icon-honey"></i>Butter &
                          Eggs
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <a href="#">Omelettes</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">Breakfast Scrambles</a>
                          </li>
                          <li className="menu-item menu-item-has-children has-child">
                            <a
                              href="#"
                              className="menu-name"
                              data-title="Eggs & other considerations"
                            >
                              Eggs & other considerations
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="#">Classic Breakfast</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Huevos Rancheros</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Everything Egg Sandwich</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Egg Sandwich</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Vegan Burrito</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Biscuits and Gravy</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Bacon Avo Egg Sandwich</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="#">Griddle</a>
                          </li>
                          <li className="menu-item menu-item-has-children has-child">
                            <a
                              href="#"
                              className="menu-name"
                              data-title="Sides & Extras"
                            >
                              Sides & Extras
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item">
                                <a href="#">Breakfast Burrito</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Crab Cake Benedict</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Corned Beef Hash</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Steak & Eggs</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Oatmeal</a>
                              </li>
                              <li className="menu-item">
                                <a href="#">Fruit & Yogurt Parfait</a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item">
                            <a href="#">Biscuits</a>
                          </li>
                          <li className="menu-item">
                            <a href="#">Seasonal Fruit Plate</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#" className="menu-title">
                          <i className="ecom-icon icon-fast-food"></i>
                          Fastfood
                        </a>
                      </li>
                      <li className="menu-item menu-item-has-children has-megamenu">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Vegetables"
                        >
                          <i className="ecom-icon icon-broccoli-1"></i>
                          Vegetables
                        </a>
                        <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-01">
                          <div className="mega-content">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-12 xs-margin-bottom-25 md-margin-bottom-0">
                                <div className="wrap-custom-menu vertical-menu">
                                  <h4 className="menu-title">Vegetables</h4>
                                  <ul className="menu">
                                    <li>
                                      <a href="#">Fruit & Nut Gifts</a>
                                    </li>
                                    <li>
                                      <a href="#">Mixed Fruits</a>
                                    </li>
                                    <li>
                                      <a href="#">Oranges</a>
                                    </li>
                                    <li>
                                      <a href="#">Bananas & Plantains</a>
                                    </li>
                                    <li>
                                      <a href="#">Fresh Gala Apples</a>
                                    </li>
                                    <li>
                                      <a href="#">Berries</a>
                                    </li>
                                    <li>
                                      <a href="#">Pears</a>
                                    </li>
                                    <li>
                                      <a href="#">Produce</a>
                                    </li>
                                    <li>
                                      <a href="#">Snack Foods</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item menu-item-has-children has-megamenu">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Fresh Berries"
                        >
                          <i className="ecom-icon icon-grape"></i>Fresh
                          Berries
                        </a>
                        <div className="wrap-megamenu lg-width-900 md-width-640 background-mega-02">
                          <div className="mega-content">
                            <div className="row">
                              <div className="col-lg-3 col-md-4 sm-col-12 md-margin-bottom-83 xs-margin-bottom-25">
                                <div className="wrap-custom-menu vertical-menu">
                                  <h4 className="menu-title">Fresh Berries</h4>
                                  <ul className="menu">
                                    <li>
                                      <a href="#">Fruit & Nut Gifts</a>
                                    </li>
                                    <li>
                                      <a href="#">Mixed Fruits</a>
                                    </li>
                                    <li>
                                      <a href="#">Oranges</a>
                                    </li>
                                    <li>
                                      <a href="#">Bananas & Plantains</a>
                                    </li>
                                    <li>
                                      <a href="#">Fresh Gala Apples</a>
                                    </li>
                                    <li>
                                      <a href="#">Berries</a>
                                    </li>
                                    <li>
                                      <a href="#">Pears</a>
                                    </li>
                                    <li>
                                      <a href="#">Produce</a>
                                    </li>
                                    <li>
                                      <a href="#">Snack Foods</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="menu-item">
                        <a
                          href="#"
                          className="menu-name"
                          data-title="Ocean Foods"
                        >
                          <i className="ecom-icon icon-fish"></i>Ocean Foods
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-xs-12">
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt={banner1}
                />
                {/* <Carousel.Caption>
                    <h3 className="caption-title">Vegetables 100% Organic</h3>
                    <p className="caption-subtitle">Nulla vitae elit libero.</p>
                    <a href="#" class="btn btn-bold" tabindex="0">Shop now</a>
                </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt={banner2}
                />
            
                {/* <Carousel.Caption>
                <h3 className="caption-title">Vegetables 100% Organic</h3>
                    <p className="caption-subtitle">Nulla vitae elit libero.</p>
                    <a href="#" class="btn btn-bold" tabindex="0">Shop now</a>
                </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            </div>
          </div>
    </div>      
  )
}

export default Banner
