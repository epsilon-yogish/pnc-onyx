import React from 'react';

const MyCommunication = () =>{
    return (
        <div className="container">
    <div className="row">
        <div className="offset-md-2 col-md-8">
            <div className="row pnc-my-coomunication">
                <div className="col-md-12">
                    <h3 role="heading" aria-level="1">My Communications</h3>
                    <p>Want to hear more from PNC points? Choose to receive emails below and feel free to change your preferences whenever you want.</p>
                    <div className="pnc-mycom-form">
                        <p className="common-question">Common Questions</p>
                        <p>Be sure to keep the email address in your profile current in order to receive emails from us. It is important that we keep you up-to-date with our latest terms and conditions. If you prefer to receive the updates electronically to the email address saved in your profile, please choose that option below.</p>

                        <form id="formMycommunication" data-toggle="validator" novalidate="true">
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="electronic-program" role="check-box" aria-label="check-box" />
                                    <label className="electronic-program-check" for="electronic-program">Yes, please send me electronic program disclosures.</label>
                                </div>
                                    
                                <div className="pnc-mycom-mail">
                                    <div className="form-group">
                                        <label for="email" className="disableLabel">Email *</label>
                                        <span className="pnc-tooltip">
                                        <a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" title="" data-original-title="Tooltip Content will appear here"><img src="./images/tootip.svg" alt="tooltip" /></a>
                                    
                                        </span>
                                        <input id="email" name="email" placeholder="big.mike@email.com" autocomplete="off" className="form-control" type="text" data-email="email" data-email-error="You have entered an invalid email address!" required="" data-required-error="Enter valid Email Address" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <label for="confirmEmail" className="disableLabel">Confirm Email *</label>
                                        <input id="confirmEmail" name="confirmEmail" autocomplete="off" className="form-control" type="text" data-email="email" data-email-error="You have entered an invalid email address!" data-emailMatch="emailMatch" data-emailMatch-error="Email does not match!" required="" data-required-error="Enter valid Email Address" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="pnc-btn-wrap">

                                    <button type="button" className="btn cancel">Cancel</button>
                                    <button type="submit" className="btn update">Update</button>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>



    )
}
 
export default MyCommunication;