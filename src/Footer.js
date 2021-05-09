import React from 'react';
import "./Footer.css"

function Footer() {

    const backToTop = () => {
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="footer">
            <button className="footer__backToHome" onClick={backToTop}>Back to Top</button>

            <div className="row">
                <div className="footer__nav col-md-3 col-sm-6 col-6">
                    <h6 className="footer__navTitle">Get To Know Us</h6>
                    <div className="footer__navLinks">
                        <ul className="footer__navUl">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Gift a Smile</a></li>
                            <li><a href="">Press Releases</a></li>
                            <li><a href="">Amazon Cares</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__nav col-md-3 col-sm-6 col-6">
                    <h6 className="footer__navTitle">Connect with Us</h6>
                    <div className="footer__navLinks">
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__nav col-md-3 col-sm-6 col-6">
                    <h6 className="footer__navTitle">Make Money with Us</h6>
                    <div className="footer__navLinks">
                        <ul>
                            <li><a href="">Sell on Amazon</a></li>
                            <li><a href="">Amazon Global Selling</a></li>
                            <li><a href="">Become an Affiliate</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__nav col-md-3 col-sm-6 col-6">
                    <h6 className="footer__navTitle">Let Us Help You</h6>
                    <div className="footer__navLinks">
                        <ul>
                            <li><a href="">Your Account</a></li>
                            <li><a href="">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyRight">
                    <p>Copyright © fake Amazon 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
