import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <hr />
            <div className="footer-detail">
                <p className="footer-detail-info">Copyright ©
                    <a href="https://saradhi1505.github.io/My_Portfolio/" rel="noopener noreferrer"><span> Pardha Saradhi Alapati</span></a>
                     . All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;