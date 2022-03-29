import React from "react"
import Image from '../images/bg-1.jpg'
import camera from '../images/camera.png'
import './background.css'

function Background()
{
const mystyle={
    backgroundImage: "url(" + Image + ")"
};
return(
<div className="container" style={{ padding: "30px 0px"}}>
                <div className="cta cta-border mb-5" style={mystyle}>
                    <img src={camera} alt={camera} className="cta-img" />
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="cta-content">
                                <div className="cta-text text-right text-white">
                                    <p>Shop Today’s Deals <strong>Awesome Made Easy. HERO7 Black</strong></p>
                                </div>
                                <a href="#" className="text-right btn btn-primary btn-round" style={{ float: "right", borderRadius: "15px", padding: "10px" }}><span>Shop Now - $429.99</span><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        export default Background;