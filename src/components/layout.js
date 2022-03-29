/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logo.jpg"

import Header from "./header"
import Banner from "./banner"
import Category from "./category"
import Products from "./products"
import Background from "./background"
import Productlist from "./productlist"
import Image from "../images/bg-5.jpg"
import card1 from "../images/card1.jpg"
import card2 from "../images/card2.jpg"
import card3 from "../images/card3.jpg"
import card4 from "../images/card4.jpg"
import card5 from "../images/card5.jpg"

import "./layout.css"
import "./animate.min.css"
import "./bootstrap.min.css"
import "./font-awesome.min.css"
import "./main-color04.css"
import "./nice-select.css"
import "./style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const mystyle={
    backgroundImage: "url(" + Image + ")"
};
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="page-contain">
        <div id="main-content" className="main-content">
            <Banner />
            <Category />
            <Products />
            <Background />
            <Productlist />
        </div>
      </div>
      <div>
        <main>{children}</main>
        <footer id="footer" className="footer layout-03">
        <div className="footer-content background-footer-03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-9">
                        <section className="footer-item">
                            <a href="#" className="logo footer-logo">
                                <img src={logo} alt={logo} width="135" height="36" />
                            </a>
                            <div className="footer-phone-info">
                                <i className="ecom-icon icon-head-phone"></i>
                                <p className="r-info">
                                    <span>Got Questions ?</span>
                                    <span>(700)&nbsp; 9001-1909  (900) 689 -66</span>
                                </p>
                            </div>
                            <div className="newsletter-block layout-01">
                                <h4 className="title">Newsletter Signup</h4>
                                <div className="form-content">
                                    <form action="#" name="new-letter-foter">
                                        <input type="email" className="input-text email" value="" placeholder="Your email here..." />
                                        <button type="submit" className="bnt-submit" name="ok">Sign up</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Useful Links</h3>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="wrap-custom-menu vertical-menu-2">
                                        <ul className="menu">
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">About Our Shop</a></li>
                                            <li><a href="#">Secure Shopping</a></li>
                                            <li><a href="#">Delivery infomation</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Our Sitemap</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-6">
                                    <div className="wrap-custom-menu vertical-menu-2">
                                        <ul className="menu">
                                            <li><a href="#">Who We Are</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">Projects</a></li>
                                            <li><a href="#">Contacts Us</a></li>
                                            <li><a href="#">Innovation</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 md-margin-top-5px sm-margin-top-50px xs-margin-top-40px">
                        <section className="footer-item">
                            <h3 className="section-title">Head Offices</h3>
                            <div className="contact-info-block footer-layout xs-padding-top-10px">
                                <ul className="contact-lines">
                                    <li>
                                        <p className="info-item">
                                            <i className="ecom-icon icon-location"></i>
                                            <b className="desc">30, Main Rd, Kamarajapuram, Sembakkam, Chennai. </b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="ecom-icon icon-phone"></i>
                                            <b className="desc">Phone: (+067) 234 789</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="ecom-icon icon-letter"></i>
                                            <b className="desc">jeevavenugopal10@gmail.com</b>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="info-item">
                                            <i className="ecom-icon icon-clock"></i>
                                            <b className="desc">Hours: 7 Days a week</b>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="ecom-social inline">
                                <ul className="socials">
                                    <li><a href="#" title="twitter" className="socail-btn"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="facebook" className="socail-btn"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="pinterest" className="socail-btn"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="youtube" className="socail-btn"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                                    <li><a href="#" title="instagram" className="socail-btn"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="separator sm-margin-top-62px xs-margin-top-40px"></div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="copy-right-text"><p><a href="#">Copyright © 2022. All Rights Reserved.</a></p></div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-xs-12">
                        <div className="payment-methods">
                            <ul>
                                <li><a href="#" className="payment-link"><img src={card1} width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src={card2} width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src={card3} width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src={card4} width="51" height="36" alt="" /></a></li>
                                <li><a href="#" className="payment-link"><img src={card5} width="51" height="36" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
