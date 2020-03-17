import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <div>
            <div className={hovered ? 'menu-overlay result_hover' : 'menu-overlay'}>
            </div>

            <header>
                <div className="container">
                    <div className="d-flex justify-content-start">
                        <ul className="sigup">
                            <li><a href="#" aria-label="PNC.com">PNC.com</a></li>
                            <li><a href="#" aria-label="Personal">Personal</a></li>
                            <li><a href="#" aria-label="Small Business">Small Business</a></li>
                            <li><a href="#" aria-label="Corporate &amp; Institutional">Corporate &amp; Institutional</a></li>
                            <li><a href="#" aria-label="About Us">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </header>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="menu-icon-container">
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>

                    <div className="menu-logo-container">
                        <a href="#"><img className="nav-logo" src="./images/PNC_Onyx_white.png" alt="PNC ONYX logo" /></a>
                    </div>



                    <div className="collapse navbar-collapse bg-dark" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" aria-label="WELCOME" tabindex="0">WELCOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-label="REWARDS">REWARDS</a>
                            </li>
                            <li className="nav-item dropdown" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>

                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-label="HELP" aria-haspopup="true" aria-expanded="true" >
                                    HELP
				</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="up-arrow"></div>
                                    <a className="dropdown-item" href="#" aria-label="FAQs">FAQs</a>
                                    <Link className="dropdown-item" to="contact" aria-label="Contact Us">Contact Us</Link>
                                    <a className="dropdown-item" href="#" aria-label="Terms and Conditions">Terms and Conditions</a>
                                </div>
                            </li>
                        </ul>
                        <div className="pre-header-container">
                            <ul>

                                <li><a>PNC.com</a></li>
                                <li><a>Personal</a></li>
                                <li><a>Small Business</a></li>
                                <li><a>Corporate &amp; Institutional</a></li>
                                <li><a>About Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pnc-sign-in dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-label="HELP" aria-haspopup="true" aria-expanded="true">
                            <span className="pnc-sign-in-text" aria-hidden="true">SIGN IN</span><img className="sign-in" src="./images/icon-signin.svg" alt="Sign In" />
                        </a>
                        <div className="logged-out dropdown-menu" aria-labelledby="navbarDropdown">
                            <p>Welcome Back</p>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" id="name" name="name" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" id="password" name="password" placeholder="Password" />
                                </div>
                                <button type="button" className="btn btn-primary">Sign In &gt;</button>
                            </form>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header;