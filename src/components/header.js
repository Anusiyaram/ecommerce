import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header id="header" className="header-area style-01 layout-04">
    <div className="header-top bg-main hidden-xs">
      <div className="container">
        <div className="top-bar left">
          <ul className="horizontal-menu">
            <li>
              <a href="#">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                Organic@company.com
              </a>
            </li>
          </ul>
        </div>
        <div className="top-bar right">
          <ul className="social-list">
            <li>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-pinterest" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <ul className="horizontal-menu">
            <li>
              <a href="login.html" className="login-link">
                <i className="biolife-icon icon-login"></i>Login/Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="header-middle biolife-sticky-object ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-md-6 col-xs-6">
            <a href="home-04-light.html" className="biolife-logo">
              <span
                style={{
                  fontSize: "22px",
                  color: "#c51d1d",
                  fontWeight: "bold",
                }}
              >
                <b
                  style={{
                    color: "rgb(239 0 0)",
                    fontWeight: "bolder",
                    fontSize: "30px",
                    verticalAlign: "text-top",
                  }}
                >
                  C
                </b>
                ompany Logo
              </span>
            </a>
          </div>
          <div className="col-lg-6 col-md-7 hidden-sm hidden-xs">
            <div className="primary-menu">
              <ul
                className="menu biolife-menu clone-main-menu clone-primary-menu"
                id="primary-menu"
                data-menuname="main menu"
              >
                <li className="menu-item">
                  <a href="#">Home</a>
                </li>
                <li className="menu-item menu-item-has-children has-megamenu">
                  <a href="#" className="menu-name" data-title="Shop">
                    Shop
                  </a>
                  <div className="wrap-megamenu lg-width-900 md-width-750">
                    <div className="mega-content">
                      <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
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
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div className="wrap-custom-menu vertical-menu">
                          <h4 className="menu-title">Vegetables</h4>
                          <ul className="menu">
                            <li>
                              <a href="#">Berries</a>
                            </li>
                            <li>
                              <a href="#">Pears</a>
                            </li>
                            <li>
                              <a href="#">Chili Peppers</a>
                            </li>
                            <li>
                              <a href="#">Fresh Avocado</a>
                            </li>
                            <li>
                              <a href="#">Grapes</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div className="wrap-custom-menu vertical-menu ">
                          <h4 className="menu-title">Fresh Fruits</h4>
                          <ul className="menu">
                            <li>
                              <a href="#">Basket of apples</a>
                            </li>
                            <li>
                              <a href="#">Strawberry</a>
                            </li>
                            <li>
                              <a href="#">Blueberry</a>
                            </li>
                            <li>
                              <a href="#">Orange</a>
                            </li>
                            <li>
                              <a href="#">Pineapple</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div className="wrap-custom-menu vertical-menu">
                          <h4 className="menu-title">Featured Products</h4>
                          <ul className="menu">
                            <li>
                              <a href="#">Coffee Creamers</a>
                            </li>
                            <li>
                              <a href="#">Mayonnaise</a>
                            </li>
                            <li>
                              <a href="#">Almond Milk</a>
                            </li>
                            <li>
                              <a href="#">Fruit Jam</a>
                            </li>
                            <li>
                              <a href="#">Beverages</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-item-has-children has-child">
                  <a href="#" className="menu-name" data-title="Product">
                    Product
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
                <li className="menu-item menu-item-has-children has-megamenu">
                  <a href="#" className="menu-name" data-title="Pages">
                    Demo
                  </a>
                  <div className="wrap-megamenu lg-width-800 md-width-750">
                    <div className="mega-content">
                      <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div className="wrap-custom-menu vertical-menu">
                          <h4 className="menu-title">Home Page</h4>
                          <ul className="menu">
                            <li className="menu-item">
                              <a href="home-01.html">Home 01</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-02.html">Home 02</a>
                            </li>
                            <li className="menu-item">
                              <a href="index-2.html">Home 03</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-03-green.html">Home 03 Green</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-04.html">Home 04</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-04-light.html">Home 04 Light</a>
                            </li>
                            <li className="menu-item">
                              <a href="home-05.html">Home 05</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-xs-12 md-margin-bottom-0 xs-margin-bottom-25">
                        <div className="wrap-custom-menu vertical-menu">
                          <h4 className="menu-title">Inner Pages</h4>
                          <ul className="menu">
                            <li className="menu-item">
                              <a href="blog-post.html">Blog Single</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-v01.html">Blog Style 01</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-v02.html">Blog Style 02</a>
                            </li>
                            <li className="menu-item">
                              <a href="blog-v03.html">Blog Style 03</a>
                            </li>
                            <li className="menu-item">
                              <a href="contact.html">Contact Us</a>
                            </li>
                            <li className="menu-item">
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li className="menu-item">
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li className="menu-item">
                              <a href="shopping-cart.html">Shopping Cart</a>
                            </li>
                            <li className="menu-item">
                              <a href="login.html">Login/Register</a>
                            </li>
                            <li className="menu-item">
                              <a href="404.html">404</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-item-has-children has-megamenu">
                  <a href="#" className="menu-name" data-title="Blog">
                    Blog
                  </a>
                  <div className="wrap-megamenu lg-width-800 md-width-750">
                    <div className="mega-content">
                      <div className="col-lg-3 col-md-3 col-xs-6">
                        <div className="wrap-custom-menu vertical-menu">
                          <h4 className="menu-title">Blog Categories</h4>
                          <ul className="menu">
                            <li>
                              <a href="#">Beauty (30)</a>
                            </li>
                            <li>
                              <a href="#">Fashion (50)</a>
                            </li>
                            <li>
                              <a href="#">Food (10)</a>
                            </li>
                            <li>
                              <a href="#">Life Style (60)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-md-6 col-xs-6">
            <div className="biolife-cart-info">
              <div className="mobile-search">
                <a href="javascript:void(0)" className="open-searchbox">
                  <i className="biolife-icon icon-search"></i>
                </a>
                <div className="mobile-search-content">
                  <form
                    action="#"
                    className="form-search"
                    name="mobile-seacrh"
                    method="get"
                  >
                    <a href="#" className="btn-close">
                      <span className="biolife-icon icon-close-menu"></span>
                    </a>
                    <input
                      type="text"
                      name="s"
                      className="input-text"
                      value=""
                      placeholder="Search here..."
                    />
                    <select name="category">
                      <option value="-1" selected>
                        All Categories
                      </option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fresh_berries">Fresh Berries</option>
                      <option value="ocean_foods">Ocean Foods</option>
                      <option value="butter_eggs">Butter & Eggs</option>
                      <option value="fastfood">Fastfood</option>
                      <option value="fresh_meat">Fresh Meat</option>
                      <option value="fresh_onion">Fresh Onion</option>
                      <option value="papaya_crisps">Papaya & Crisps</option>
                      <option value="oatmeal">Oatmeal</option>
                    </select>
                    <button type="submit" className="btn-submit">
                      go
                    </button>
                  </form>
                </div>
              </div>
              <div className="wishlist-block hidden-sm hidden-xs">
                <a href="#" className="link-to">
                  <span className="icon-qty-combine">
                    <i className="icon-heart-bold biolife-icon"></i>
                    {/* <span className="qty">4</span> */}
                  </span>
                </a>
              </div>
              <div className="minicart-block">
                <div className="minicart-contain">
                  <a href="javascript:void(0)" className="link-to">
                    <span className="icon-qty-combine">
                      <i className="icon-cart-mini biolife-icon"></i>
                      {/* <span className="qty">8</span> */}
                    </span>
                    <span className="title">My Cart -</span>
                    <span className="sub-total">$0.00</span>
                  </a>
                  {/* <div className="cart-content">
                    <div className="cart-inner">
                      <ul className="products">
                        <li>
                          <div className="minicart-item">
                            <div className="thumb">
                              <a href="#">
                                <img
                                  src="assets/images/minicart/pr-01.jpg"
                                  width="90"
                                  height="90"
                                  alt="National Fresh"
                                />
                              </a>
                            </div>
                            <div className="left-info">
                              <div className="product-title">
                                <a href="#" className="product-name">
                                  National Fresh Fruit
                                </a>
                              </div>
                              <div className="price">
                                <ins>
                                  <span className="price-amount">
                                    <span className="currencySymbol">£</span>
                                    85.00
                                  </span>
                                </ins>
                                <del>
                                  <span className="price-amount">
                                    <span className="currencySymbol">£</span>
                                    95.00
                                  </span>
                                </del>
                              </div>
                              <div className="qty">
                                <label for="cart[id123][qty]">Qty:</label>
                                <input
                                  type="number"
                                  className="input-qty"
                                  name="cart[id123][qty]"
                                  id="cart[id123][qty]"
                                  value="1"
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="action">
                              <a href="#" className="edit">
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#" className="remove">
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="minicart-item">
                            <div className="thumb">
                              <a href="#">
                                <img
                                  src="assets/images/minicart/pr-02.jpg"
                                  width="90"
                                  height="90"
                                  alt="National Fresh"
                                />
                              </a>
                            </div>
                            <div className="left-info">
                              <div className="product-title">
                                <a href="#" className="product-name">
                                  National Fresh Fruit
                                </a>
                              </div>
                              <div className="price">
                                <ins>
                                  <span className="price-amount">
                                    <span className="currencySymbol">£</span>
                                    85.00
                                  </span>
                                </ins>
                                <del>
                                  <span className="price-amount">
                                    <span className="currencySymbol">£</span>
                                    95.00
                                  </span>
                                </del>
                              </div>
                              <div className="qty">
                                <label for="cart[id124][qty]">Qty:</label>
                                <input
                                  type="number"
                                  className="input-qty"
                                  name="cart[id124][qty]"
                                  id="cart[id124][qty]"
                                  value="1"
                                  disabled
                                />
                              </div>
                            </div>
                            <div className="action">
                              <a href="#" className="edit">
                                <i
                                  className="fa fa-pencil"
                                  aria-hidden="true"
                                ></i>
                              </a>
                              <a href="#" className="remove">
                                <i
                                  className="fa fa-trash-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <p className="btn-control">
                        <a href="#" className="btn view-cart">
                          view cart
                        </a>
                        <a href="#" className="btn">
                          checkout
                        </a>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="mobile-menu-toggle">
                <a
                  className="btn-toggle"
                  data-object="open-mobile-menu"
                  href="javascript:void(0)"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
