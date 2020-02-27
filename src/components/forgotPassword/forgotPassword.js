import React from 'react';
import { useForm } from "react-hook-form";



const ForgotPassword = ({forgotData}) =>{
  const {forgotPassword} = forgotData;

return(
        <div className="container">
         <div className="row">
             <div className="offset-md-2 col-md-8">
                    <div className="formUser">
                      <h3 role="heading" aria-level="1">{forgotPassword.title}</h3>
                      <p className="forgotUsername">{forgotPassword.desc} </p>
                      <p className="note" dangerouslySetInnerHTML={ {__html:forgotPassword.note }}></p>
                        <form id="formUserName" data-toggle="validator" novalidate="true">
                           <div className="form-group">
								<label for="fname">Username</label>
								<input aria-label="username" id="fname" autocomplete="off" className="form-control" type="text" data-fname="fname" data-fname-error="Numbers and Special Characters are not allowed!" required="" data-required-error="Please enter valid first name." />
								<div className="help-block with-errors"></div>
							</div>
                            <div className="form-group">
                                <label for="zipCode" className="disableLabel">Statement ZIP/Postal Code:</label><span className="zip-code"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" title="" data-original-title="This is the ZIP Code on your PNC Points participating card statement. "><img src="./images/tootip.svg" alt="tooltip" /></a></span>                             
                                <input aria-label="zipcode" id="zipCode" autoComplete="off" className="form-control" type="text" data-numeric-value="numeric-value" data-numeric-value-error="Numeric value only" maxlength="5" required data-required-error="Please enter ZIP code" />
								<div className="help-block with-errors"></div>
							</div>
							<div className="form-group">
								<label for="pncPoint" className="disableLabel">Last Four Digits on Your PNC points Card:</label>
								<input aria-label="Last Four Digits on Your PNC points Card:" id="pncPoint" autoComplete="off" className="form-control" type="text" data-numeric-value="numeric-value" data-numeric-value-error="Numeric value only" maxlength="4" required minlength="4" data-required-error="Please enter 4 digit PNC point" />
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
   
)
} 

export default ForgotPassword;