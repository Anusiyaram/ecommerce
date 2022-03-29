import React from 'react'
import product1 from "../images/product-1.jpg"
import product2 from "../images/product-2.jpg"
import product3 from "../images/product-3.jpg"
import product4 from "../images/product-4.jpg"
import product5 from "../images/product-5.jpg"
import product6 from "../images/product-6.jpg"
import product7 from "../images/product-7.jpg"
import product8 from "../images/product-8.jpg"
import product9 from "../images/product-9.jpg"

function Productlist()
{
    return(
<div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xs-12">
                        <div className="advance-product-box">
                            <div className="biolife-title-box bold-style biolife-title-box__bold-style mobile-tiny sm-margin-bottom-36px">
                                <h3 className="title">Top Rated Products</h3>
                            </div>
                            <ul className="products-list vertical-layout products-list__vertical-layout">
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product1} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product2} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product3} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xs-12">
                        <div className="advance-product-box">
                            <div className="biolife-title-box bold-style biolife-title-box__bold-style mobile-tiny">
                                <h3 className="title">Featured Products</h3>
                            </div>
                            <ul className="products-list vertical-layout products-list__vertical-layout">
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product4} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product5} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product6} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-xs-12 sm-margin-top-54px md-margin-top-0">
                        <div className="advance-product-box">
                            <div className="biolife-title-box bold-style biolife-title-box__bold-style mobile-tiny">
                                <h3 className="title">Bestseller Products</h3>
                            </div>
                            <ul className="products-list vertical-layout products-list__vertical-layout">
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product7} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product8} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="product-item">
                                    <div className="contain-product contain-product__right-info-layout2">
                                        <div className="product-thumb">
                                            <a href="#" className="link-to-product">
                                                <img src={product9} alt="Vegetables" width="100" height="100" className="product-thumnail" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4 className="product-title"><a href="#" className="pr-name">Lorem Ipsum</a></h4>
                                            <div className="price ">
                                                <ins><span className="price-amount"><span className="currencySymbol">£</span>85.00</span></ins>
                                                <del><span className="price-amount"><span className="currencySymbol">£</span>95.00</span></del>
                                            </div>
                                            <div className="rating">
                                                <p className="star-rating"><span className="width-80percent"></span></p>
                                                <span className="review-count">(05 Reviews)</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        export default Productlist;