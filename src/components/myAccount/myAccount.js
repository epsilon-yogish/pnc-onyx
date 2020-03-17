import React from 'react';


const MyAccount = () =>{
    return (
        <section>
    <div className="container">
        <div className="wrap-acc">
            <div className="row">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                    <h3 role="heading" aria-level="1">My Account</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-6">
                    <p className="pnc-sub-heading">Account Summary</p>
                    <div className="pnc-acc-summary-wrap">
                        <p className="reward-point">35,000 available points</p>
                        <div className="pnc-ponits-available">							
                            <div>								
                                <span>Points earned to date <a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" title="Tooltip Content will appear here"><img src="./images/tootip.svg" className="pnc-tooltip" alt="tootltip" /></a></span> 
                                <span className="pnc-redeem-points">2,753,857</span>
                            </div>								
                            <div>
                                <span>Points redeemed/expired to date <a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" data-original-title="Tooltip Content will appear here"><img src="./images/tootip.svg" className="pnc-tooltip" alt="tootltip" /></a></span>
                                <span className="pnc-redeem-points">-2,128,234</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-6 mt-10">
                    <p className="pnc-sub-heading">Recent Reward Orders<span className="pnc-see-summary"><button className="btn">See all orders</button></span></p>
                    <div className="pnc-flex-wrapper reward-offer-flex-container">
                        <a className="d-flex flex-wrap mwrapper" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-4 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-12 col-md-12 col-lg-5 mdescriptionAlignment">$4 Cash Value Award</span>
                            <span className="p-3 col-4 col-md-3 col-lg-3 mStatusAlignment">Complete</span>
                        </a>
                        <a className="d-flex flex-wrap mwrapper" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-4 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-12 col-md-12 col-lg-5 mdescriptionAlignment">Ematic 7” HD Quad Core Multi-Touch</span>
                            <span className="p-3 col-4 col-md-3 col-lg-3 mStatusAlignment">In-Progress</span>
                        </a>
                        <a className="d-flex flex-wrap mwrapper" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-4 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-12 col-md-12 col-lg-5 mdescriptionAlignment">Crock-Pot® - Slow Cooker Liners</span>
                            <span className="p-3 col-4 col-md-3 col-lg-3 mStatusAlignment">Shipped</span>
                        </a>
                        <a className="d-flex flex-wrap mwrapper" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-4 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-12 col-md-12 col-lg-5 mdescriptionAlignment">Beats By Doctor Dre</span>
                            <span className="p-3 col-4 col-md-3 col-lg-3 mStatusAlignment">Complete</span>
                        </a>
                    </div>
                    <button className="btn see-order">See all orders</button>
                </div>
            </div>
            <div className="row pnc-divider">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                    <p className="pnc-sub-heading">Recent Transactions<span className="pnc-see-orders"><button className="btn">See all Transactions</button></span></p>
                    <div className="pnc-flex-wrapper-order">
                        <div className="d-flex pnc-table-color-order pr-2">
                            <div className="p-3 col-lg-2">Date</div>
                            <div className="p-3 col-lg-2">Card #</div>
                            <div className="p-3 col-lg-4">Description</div>
                            <div className="p-3 col-lg-2 text-lg-center">Amount</div>
                            <div className="p-3 col-lg-2 text-lg-right">Points</div>
                        </div>
                        <a className="d-flex flex-wrap mAlernate pr-2" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-2">2853</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                            <span className="p-3 col-md-2 col-lg-2 text-lg-center">0</span>
                            <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right bold-text">31,000</span>
                        </a>
                        <a className="d-flex flex-wrap pnc-table-color mAlernate pr-2" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-2">2853</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                            <span className="p-3 col-md-2 col-lg-2 text-lg-center">$768</span>
                            <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right bold-text">-31,000</span>
                        </a>
                        <a className="d-flex flex-wrap mAlernate pr-2" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-2">2853</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                            <span className="p-3 col-md-2 col-lg-2 text-lg-center">$768</span>
                            <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right bold-text">31,000</span>
                        </a>
                    </div>
                    <button className="btn see-transaction">See all Transactions</button>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default MyAccount;