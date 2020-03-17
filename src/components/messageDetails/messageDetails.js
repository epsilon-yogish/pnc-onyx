import React from 'react';

const MessageDetails = () =>{
    return (
        <div className="container">
    <div className="wrap-message-detail">
        <div className="row">
            <div className="col-md-12 col-lg-12 pagination-wrap">
                <h3 role="heading" aria-level="1">Message Details</h3>
                <div className="pnc-mD-pagination">
                <span>
                    <a href="#"><img src="./images/circlearrow-left.svg" alt="left-arrow" /></a>
                    <span className="pagination-numbers">1 of 24</span>
                    <a href="#"><img src="./images/circlearrow.svg" alt="right-arrow" /></a>
                </span>
                </div>
            </div>
            <div className="col-md-12 col-lg-12">
                <div className="pnc-mD-print float-right">
                    <a href="#"><img className="pnc-print" src="./images/icon-print.svg" alt="print" /></a>
                    <a href="#"><img src="./images/icon-trash.svg" alt="trash" /></a>
                </div>
            </div>
        </div>
        <div className="row pnc-customer-service">
            <div className="col-md-12 col-lg-3">
                <p><strong className="label-from">From:</strong> Customer Service<br />
                3:16pm 02/12/2019</p>
            
            </div>
            <div className="col-md-12 col-lg-8">
                <p>Dear Michael,<br /> 
                Thank you for your PNC Commercial Card Rewards rewards redemption. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed</p>
            
            </div>
        </div>
        <div className="row desktop-only-rewardtable">
            <div className="col-lg-12">					
                <div className="pnc-mDtable-wrapper">
                            <div className="d-flex pnc-mDtable">
                              <div className="p-3 col-lg-2">Reward Number</div>
                              <div className="p-3 col-lg-3">Rewards Redeemed</div>
                              <div className="p-3 col-lg-1">Qty</div>
                              <div className="p-3 col-lg-1">Points</div>
                              <div className="p-3 col-lg-2">Status</div>
                              <div className="p-3 col-lg-3">In-Store Pickup Number</div>
                            </div>
                            <div className="d-flex mDalternate">
                              <div className="p-3 col-lg-2">6040093258-25</div>
                              <div className="p-3 col-lg-3">Baja Fresh Maxican Grill</div>
                              <div className="p-3 col-lg-1">1</div>
                              <div className="p-3 col-lg-1">10833</div>
                              <div className="p-3 col-lg-2">Complete</div>
                              <div className="p-3 col-lg-3">-</div>
                            </div>
                            <div className="d-flex mDalternate">
                              <div className="p-3 col-lg-2">6040093258-25</div>
                              <div className="p-3 col-lg-3">BP - $25 Gift Card</div>
                              <div className="p-3 col-lg-1">1</div>
                              <div className="p-3 col-lg-1">11222</div>
                              <div className="p-3 col-lg-2">In-Progress</div>
                              <div className="p-3 col-lg-3">-</div>
                            </div>								
                </div>					
            </div>
        </div>
        
        <div className="pnc-message-rewArd">
            <div className="row">
                <div className="col-md-12">
                    <div className="reward-md-wrap">
                    <div className="row m-20">
                        <div className="col-12 col-md-4 m-20">
                            <strong className="label-from">Reward Number: </strong><br />
                            6040088728-25
                        </div>
                        <div className="col-12 col-md-8">
                            <strong className="label-from">Reward Description: </strong> <br />
                            Baja Fresh Maxican Grill - $25 Gift Card
                        </div>
                    </div>
                    <div className="row m-20">
                        <div className="col-12 col-md-4 m-20">
                             <strong className="label-from">Qty: </strong> <br />
                            1
                        </div>
                        <div className="col-12 col-md-8">
                             <strong className="label-from">Points: </strong> <br />
                            10883
                        </div>
                    </div>
                    <div className="row m-20">
                        <div className="col-12 col-md-4 order-mobile-only">
                             <strong className="label-from">Status: </strong> <br />
                            In-Progress
                        </div>
                        <div className="col-12 col-md-8 m-20">
                             <strong className="label-from">In-Store Pickup Number: </strong>  <br />
                            -
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="pnc-message-rewArd second-block">
            <div className="row">
                <div className="col-md-12">
                    <div className="reward-md-wrap">
                    <div className="row m-20">
                        <div className="col-12 col-md-4 m-20">
                            <strong className="label-from">Reward Number: </strong><br />
                            6040088728-25
                        </div>
                        <div className="col-12 col-md-8">
                            <strong className="label-from">Reward Description: </strong> <br />
                            Baja Fresh Maxican Grill - $25 Gift Card
                        </div>
                    </div>
                    <div className="row m-20">
                        <div className="col-12 col-md-4 m-20">
                             <strong className="label-from">Qty: </strong> <br />
                            1
                        </div>
                        <div className="col-12 col-md-8">
                             <strong className="label-from">Points: </strong> <br />
                            10883
                        </div>
                    </div>
                    <div className="row m-20">
                        <div className="col-12 col-md-4 order-mobile-only">
                             <strong className="label-from">Status: </strong> <br />
                            In-Progress
                        </div>
                        <div className="col-12 col-md-8 m-20">
                             <strong className="label-from">In-Store Pickup Number: </strong>  <br />
                            -
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="row Info-about-order">
            <div className="col-md-12 col-lg-3">
                <p className="info-heading"><strong><span className="desktop-break">Information about</span> your order:</strong></p>
            
            </div>
            <div className="col-md-12 col-lg-9">
                <p>1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis.</p>

                <p>2. Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in.</p>

                <p>3. Vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>

                <p>4. laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
        </div>        
 </div>	
</div>
    )
}

export default MessageDetails;