import React from 'react';

const Footer = () =>{
return (
    <footer>
    <div className="container">
      <div className="row">
          <div className="col-lg-7 col-sm-12 col-5 logo">
              <a className="navbar-brand" href="#" aria-label="PNC">
                <img src="./images/pnc_footer_logo.png" alt="logo"/>
              </a>
    
            </div>
        <div className="col-lg-5 col-sm-12 col-7">
          <ul className="list">
            <li><a href="" className="link" aria-label="Security &amp; Privacy">Security &amp; Privacy</a></li>
            <li><a href="" className="link" aria-label="Terms &amp; Conditions">Terms &amp; Conditions</a></li>
            <li><a href="" className="link" aria-label="Privacy Policy">Privacy Policy</a></li>
          </ul>
          <p className="d-none d-sm-block">© 2019 The PNC Financial Services Group, Inc. All rights reserved.</p>
        </div> 
      </div>
      <div className="row d-block d-sm-none">
          <div className="col-12">
              <p>© 2019 The PNC Financial Services Group, Inc. All rights reserved.</p>
          </div>
      </div>
    </div>
  </footer>
)
}

export default Footer;