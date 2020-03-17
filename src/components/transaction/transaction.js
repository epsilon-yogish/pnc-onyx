import React from 'react';

const Transaction = () =>{
    return (
        <div className="container">
    <div className="wrap-transaction">
        <div className="row">
            <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12 heading-with-filter">
                <h3 role="heading" aria-level="1">Transactions</h3>
                    <span className="sort float-right">
                        <a className="sort-inactive" href="#">
                            <img className="sort-img" src="./images/sort-filter.svg" alt="sort-filter" />Sort/Filter
                        </a>
                        <a className="sort-expand" href="#">
                            <img className="close-img" src="./images/close-button.svg" alt="close" /> Close
                        </a>
                    </span>
            </div>
            <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12 pagination-wrap">					
                <div className="d-flex pnc-transaction-pagination float-right">
                    <div className="month-filter">						
                    <span>From</span>
                        <select className="form-control selectBox" aria-label="selectbox-filter">
                                <option value="jan">Jan</option>
                                <option value="feb">Feb</option>
                                <option value="march">March</option>
                        </select>											
                    </div>
                    <div className="card-filter">						
                    <span>On Card</span>
                        <select id="filter" className="form-control selectBox" aria-label="selectbox-sort">
                                <option value="all">All </option>
                            <option value="$40">$40</option>
                            <option value="$60">$60</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                <div className="pnc-sort-mb">
                            <p>FILTER BY</p>
                            <label>From</label>
                            <select id="filter-mb" className="form-control selectBox" aria-label="list-box" role="listbox">
                                <option value="10">Date</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                            <label>On Card</label>
                            <select id="filter-mb" className="form-control selectBox" aria-label="list-box" role="listbox">
                                <option value="10">Date</option>
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
                <div className="pnc-transaction-wrapper">
                            <div className="d-flex pnc-transaction-table pr-2">
                              <div className="p-3 col-lg-2">Date & Time <i className="fas fa-sort"></i></div>
                              <div className="p-3 col-lg-2 text-lg-center">Card #</div>
                              <div className="p-3 col-lg-4">Description</div>
                              <div className="p-3 col-lg-2">Amount</div>
                              <div className="p-3 col-lg-2 text-right">Points</div>
                            </div>
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 10:49 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">0</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>
                            <div className="d-flex flex-wrap pnc-table-color mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 1:58 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">-31,000<span className="points-mobile-only">pts</span></span>
                            </div>
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 1:58 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>	
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 4:49 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 1:58 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>	
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 4:49 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>	
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 1:58 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>	
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 4:49 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2 ">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>	
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 1:58 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>	
                            <div className="d-flex flex-wrap mAlernate pr-2">
                              <span className="p-3 col-8 col-md-9 col-lg-2 mdateAlignment"><span className="small">04/01/2019 1:58 PM</span></span>
                              <span className="p-3 col-md-2 col-lg-2 text-lg-center">2853</span>
                              <span className="p-3 col-12 col-md-12 col-lg-4">Catalog Redemption - #6015323</span>
                              <span className="p-3 col-md-2 col-lg-2">$768</span>
                              <span className="p-3 col-4 col-md-3 col-lg-2 text-lg-right">31,000<span className="points-mobile-only">pts</span></span>
                            </div>									
                </div>
            </div>			
        </div>
                    <div className="float-right view-per-page-sec">						
                        <div className="d-flex view-per-page-sec-inner">
                            <span>View</span>
                            <select id="filter" className="form-control selectBox" aria-label="selectbox-pagination">
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

export default Transaction;