import React from 'react';

const RetriveUsername = () =>{
    return(
        <section className="pnc-username">
        <div className="container">
            <div className="row">
                <div className="offset-md-2 col-md-8">
                    <div className="formUser">
                        <h3 role="heading" aria-level="1">Retrieve Username</h3>
                        <p className="forgotUsername">Forgot your username? Then let's get it for you! Enter your PNC points card number to get started.</p>
                        <p className="note"><strong>Note:</strong> Updating your username here does not update or change your PNC Online Banking username.</p>
                        <form id="formUserNameRetrive" data-toggle="validator" novalidate="true">
                            <div className="form-group">
                                <label for="CardNum" className="disableLabel">Card Number</label>
                                <input id="CardNum" autoComplete="off" className="form-control" type="text" data-numeric-value="numeric-value" data-numeric-value-error="Numeric value only" maxlength="19" required data-required-error="Please enter credit card number" />
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <button type="submit" className="btn">NEXT</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default RetriveUsername;