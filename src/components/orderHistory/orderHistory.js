import React from 'react';

const OrderHistory = () =>{
    return (
        <div className="container">
        <div className="wrap-order">
            <div className="row">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12 heading-with-filter">
                    <h3 role="heading" aria-level="1">Order History</h3>
                    <span className="sort float-right">
                        <a className="sort-inactive" href="#">
                            <img className="sort-img" src="./images/sort-filter.svg" alt="sort-filter" />Sort/Filter
                        </a>
                        <a className="sort-expand" href="#">
                            <img className="close-img" src="./images/close-button.svg" alt="close" />Close
                        </a>
                    </span>
                </div>
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12 pagination-wrap">
                    <div className="d-flex pnc-transaction-pagination float-right">
                        <div className="month-filter">						
                            <span>Show</span>
                            <select className="form-control selectBox" role="listbox" aria-label="selectbox-filter">
                                    <option value="All">All</option>
                                    <option value="Feb">Feb</option>
                                    <option value="March">March</option>
                            </select>										
                        </div>
                        <div className="card-filter">
                            <span>From</span>
                            <select className="form-control selectBox" role="listbox" aria-label="selectbox-sort">
                                <option value="all">All Orders </option>
                                <option value="$40">$40</option>
                                <option value="$60">$60</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                        <div className="pnc-sort-mb">
                                <p>FILTER BY</p>
                                <label>Show</label>
                                <select id="filter-mb" className="form-control selectBox" aria-label="list-box" role="listbox">
                                    <option value="10">All</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <label>From</label>
                                <select id="filter-mb" className="form-control selectBox" aria-label="list-box" role="listbox">
                                    <option value="10">All Orders</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <p>SORT BY</p>
                                <select id="filter-mb" className="form-control selectBox" aria-label="list-box" role="listbox">
                                    <option value="10">Date</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                </select>
                                <button type="submit" className="btn apply-filter">Apply Filter</button>
                        </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                    <div className="pnc-order-wrapper">
                        <div className="d-flex pnc-order-table">
                            <div className="p-3 col-lg-2">Date<i className='fas fa-sort'></i></div>
                            <div className="p-3 col-lg-1">Qty</div>
                            <div className="p-3 col-lg-1">Order#</div>
                            <div className="p-3 col-lg-4 text-lg-center">Rewards Redeemed</div>
                            <div className="p-3 col-lg-1 ">Status</div>
                            <div className="p-3 col-lg-1">Points</div>
                            <div className="p-3 col-lg-2 ">Split pay</div>
                        </div>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center" data-toggle="modal" data-target="#pncModal-orders">Rewards Redeemed</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">1000</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap pnc-table-color mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center" data-toggle="modal" data-target="#pncModal-orders">Ematic 7” HD Quad-Core Multi Touch</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">2000</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">Crock-Pot® - Slow Cooker Liners</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">30,267</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">$5 eBay eGift Card</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">5820</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">$5 Amazon.com Gift Card</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">-4550</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">Ematic 7” HD Quad-Core Multi Touch</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">-2300</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">$5 Amazon.com Gift Card</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">2000</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">Rewards Redeemed</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">30,267</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">Rewards Redeemed</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">5820</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
                        <a className="d-flex flex-wrap mAlernate" href="#">
                            <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment">04/01/2019</span>
                            <span className="p-3 col-md-2 col-lg-1">1</span>
                            <span className="p-3 col-12 col-md-12 col-lg-1 d-none d-lg-block">6015323</span>
                            <span className="p-3 col-12 col-md-12 col-lg-4 text-lg-center">Rewards Redeemed</span>
                            <span className="p-3 col-4 col-md-3 col-lg-1 mdateStatus">Complete</span>
                            <span className="p-3 col-4 col-md-6 col-lg-1 mPoints">-4550</span>
                            <div className="p-3 col-lg-2 d-none d-lg-block">0000000000</div>
                        </a>
    
                    </div>
                </div>
    
            </div>
               <div className="float-right view-per-page-sec">						
                <div className="d-flex view-per-page-sec-inner">
                    <span>View</span>
                    <select id="filter" className="form-control selectBox" role="listbox" aria-label="selectbox-pagination">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                    <span>Per page</span>
                </div>							
            </div>
    
        </div>
    </div>
    
   
    )
}

export default OrderHistory;