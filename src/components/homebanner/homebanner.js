import React from 'react';

const HomeBanner = ({ homeBanner }) => {

    return (
        <section className="pnc-hero-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {
                            homeBanner ?
                                <div className="pnc-banner-content">
                                    <h1 dangerouslySetInnerHTML={ {__html:homeBanner.title }}></h1>
                                    <button className="btn">{homeBanner.buttonText}</button>
                                </div>
                                : false
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner;