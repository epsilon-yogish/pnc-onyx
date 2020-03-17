import React from 'react';

const RewardMessages = () =>{
    return (
        <div className="container">
        <div className="wrap-reward-messages">
            <div className="row">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                
                <div className="rewards-text">
                    <h3 role="heading" aria-level="1">PNC Rewards | Messages</h3>
                </div>
                <div className="rewards-sort text-right d-none d-lg-none d-md-block d-block">
                    <span className="col-4 sort">
                        <a className="sort-inactive" href="#">
                            <img className="sort-img" src="./images/icon-sort.svg" alt="sort" />Sort
                        </a>
                        <a className="sort-expand" href="#">
                            <img className="close-img" src="./images/close-button.svg" alt="close" /> Close
                        </a>
                    </span>
                </div>
                </div>
                
            </div>	
            <div className="row pnc-reward-block-wrap">
                <div className="col-12 offset-md-2 col-md-8 offset-lg-0 col-lg-12">
                    <div className="pnc-sort-mb">
                        <p>SORT BY</p>
                        <select id="filter-mb" className="form-control selectBox" aria-label="list-box" role="listbox">
                            <option value="10">Date</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                        <button type="submit" className="btn apply-filter">Apply Filter</button>
                    </div>
                        <span className="all-select d-lg-none"><a href="#">All</a></span>
                        <span className="message-count">24 Messages</span>
                        <span className="pnc-message-count-num"> </span>
                        <span className="float-right pnc-delete" data-toggle="modal" data-target="#pncModal">
                            <img src="./images/icon-trash.svg" alt="trash" />Delete
                        </span>
                        <div className="pnc-reward-wrapper">
                            <div className="d-flex pnc-reward-message-table">
                                  <div className="p-3 col-lg-3 check-box">
                                  <div className="form-check d-none d-lg-block">
                                        <input type="checkbox" className="form-check-input selectall" id="electronic-program1" value="" />
                                        <label className="reward-message" for="electronic-program1"><span className="d-none">checkbox</span></label>
                                    </div>
                                    Sender</div>
                                  <div className="p-3 col-lg-6">Subject </div>
                                  <div className="p-3 col-lg-3">Time/Date <i className="fas fa-sort" ></i></div>
                                 
                                </div>
                                <a className="d-flex flex-wrap mAlernate" href="#">
                                  <span className="p-3 col-6 col-md-4 col-lg-3 mdateAlignment">
                                  <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="electronic-program2" value="" />
                                        <label className="reward-message" for="electronic-program2"><span className="d-none">checkbox</span></label>
                                    </div>
                                  Customer Service
                                  </span>
                                  <span className="p-3 col-12 col-md-12 col-lg-6">Your PNC Commercial Card Rewards Reward Order </span>
                                  <span className="p-3 col-6 col-md-8 col-lg-3 mcustomerService"><span className="d-none d-lg-inline">3:16 PM </span>02/12/2019</span>
                                
                                </a>
                                <a className="d-flex flex-wrap pnc-table-color mAlernate" href="#">
                                  <span className="p-3 col-6 col-md-4 col-lg-3 mdateAlignment">
                                   <div className="form-check d-none d-lg-block">
                                        <input type="checkbox" className="form-check-input" id="electronic-program3" value="" />
                                        <label className="reward-message" for="electronic-program3"><span className="d-none">checkbox</span></label>
                                    </div>
                                    Customer Service</span>
                                  <span className="p-3 col-12 col-md-12 col-lg-6">PNC Commercial Card Rewards eGift Card Rewards Redemption…</span>
                                  <span className="p-3 col-6 col-md-8 col-lg-3 mcustomerService"><span className="d-none d-lg-inline">3:16 PM </span> 02/12/2019</span>
                                 
                                </a>
                                <a className="d-flex flex-wrap mAlernate" href="#">
                                  <span className="p-3 col-6 col-md-4 col-lg-3 mdateAlignment">
                                   <div className="form-check d-none d-lg-block">
                                        <input type="checkbox" className="form-check-input" id="electronic-program4" value="" />
                                        <label className="reward-message" for="electronic-program4"><span className="d-none">checkbox</span></label>
                                    </div>
                                    Customer Service
                                    </span>
                                  <span className="p-3 col-12 col-md-12 col-lg-6">Your PNC Commercial Card Rewards Reward Order</span>
                                  <span className="p-3 col-6 col-md-8 col-lg-3 mcustomerService"><span className="d-none d-lg-inline">3:16 PM </span> 02/12/2019</span>
                                 
                                </a>	
                                <a className="d-flex flex-wrap mAlernate" href="#">
                                  <span className="p-3 col-6 col-md-4 col-lg-3 mdateAlignment">
                                   <div className="form-check d-none d-lg-block">
                                        <input type="checkbox" className="form-check-input" id="electronic-program5" value="" />
                                        <label className="reward-message" for="electronic-program5"><span className="d-none">checkbox</span></label>
                                    </div>
                                    Customer Service
                                    </span>
                                  <span className="p-3  col-12 col-md-12 col-lg-6">PNC Commercial Card Rewards eGift Card Rewards Redemption…</span>
                                  <span className="p-3 col-6 col-md-8 col-lg-3 mcustomerService"><span className="d-none d-lg-inline">3:16 PM </span> 02/12/2019</span>
                                 
                                </a>	
                                <a className="d-flex flex-wrap mAlernate" href="#">
                                  <span className="p-3 col-6 col-md-4 col-lg-3 mdateAlignment">
                                   <div className="form-check d-none d-lg-block">
                                        <input type="checkbox" className="form-check-input" id="electronic-program6" value="" />
                                        <label className="reward-message" for="electronic-program6"><span className="d-none">checkbox</span></label>
                                    </div>
                                    Customer Service
                                    </span>
                                  <span className="p-3  col-12 col-md-12 col-lg-6">Your PNC Commercial Card Rewards Reward Order</span>
                                  <span className="p-3 col-6 col-md-8 col-lg-3 mcustomerService"><span className="d-none d-lg-inline">3:16 PM </span> 02/12/2019</span>
                                 
                                </a>										
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

export default RewardMessages;