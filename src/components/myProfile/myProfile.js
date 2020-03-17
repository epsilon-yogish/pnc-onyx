import React from 'react';

const MyProfile = () =>{
    return (
        <div className="container">
    <div className="row">
        <div className="offset-md-2 col-md-8">
            <div className="pnc-profile">
                <h3 role="heading" aria-level="1">My Profile</h3>

                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="pnc-profile-wrapper">
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <h4>Personal Information<span className="tooltip-image"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" title="" data-original-title="Tooltip Content will appear here"><img src="./images/tootip.svg" alt="tooltip"/></a></span></h4>
                                </div>
                                <div className="col-md-12 col-lg-8">
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Prefix:</strong>
                                                <br /> Mr.</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>First Name:</strong>
                                                <br />Michael</div>
                                        </div>
                                    </div>
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Middle Initial:</strong>
                                                <br /> -</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Last Name: Doe</strong>
                                                <br />Doe</div>
                                        </div>
                                    </div>
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Suffix:</strong>
                                                <br /> -</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Phone Number:</strong>
                                                <br />(682) 123 - 4567</div>
                                        </div>
                                    </div>
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Email:</strong>
                                                <br /> jen.eric@email.com</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pnc-mail-wrapper">
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <h4 className="mailing-add">Mailing Address</h4>
                                </div>
                                <div className="col-md-12 col-lg-8">
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Country:</strong>
                                                <br /> United States</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Street</strong>
                                                <br /> 4105 E 71ST ST</div>
                                        </div>
                                    </div>
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Street 2</strong>
                                                <br />-</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>State</strong>
                                                <br />Ohio</div>
                                        </div>
                                    </div>
                                    <div className="row m-20">
                                        <div className="col-md-6 col-lg-6">

                                            <div><strong>City:</strong>
                                                <br />Cleveland</div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div><strong>Zip Code: </strong>
                                                <br />44105</div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="pnc-accinfo-wrapper">
                            <div className="row">
                                <div className="col-md-12 col-lg-4">
                                    <h4>Account Information</h4>
                                </div>
                                <div className="col-md-12 col-lg-8">
                                    <form id="formMyprofile" data-toggle="validator" novalidate="true">

                                        <div className="pnc-my-profile-mail">

                                            <div className="form-group">
                                                <label for="profilefname" className="">Username *</label><span className="email-tooltip"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" title="" data-original-title="Tooltip Content will appear here"><img src="./images/tootip.svg" alt="tooltip"/></a></span>
                                                <input id="profilefname" placeholder="bigmike84" autocomplete="off" className="form-control" type="text" data-fname="fname" data-fname-error="Numbers and Special Characters are not allowed!" required="" data-required-error="Please enter valid first name." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <label for="Password" className="disableLabel">Password *</label><span className="password-tooltip"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="auto" title="" data-original-title="Tooltip Content will appear here"><img src="./images/tootip.svg" alt="tooltip" /></a></span>
                                                <input id="Password" placeholder="*********" autocomplete="off" className="form-control" type="password" data-password="password" data-password-error="You have entered an invalid password!" maxlength="20" required="" data-required-error="Password is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <label for="confirm-password" className="disableLabel">Confirm Password *</label>
                                                <input id="confirm-password" placeholder="*********" autocomplete="off" className="form-control" type="password" name="confirmPassword" data-match="#Password" data-match-error="Passwords do not match. Please re-enter the password." maxlength="20" required="" data-required-error="Password is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <p className="secutity-para">To help us identify you in the future, please choose and answer the security questions.</p>
                                            <div className="form-group">
                                                <label for="exampleId1" className="">Security Question #1 *</label>
                                                <select required="" id="exampleId1" className="form-control">
                                                    <option value="What was the name of your childhood pet?">What is your favorite color</option>
                                                    <option value="select 2">select 2</option>
                                                    <option value="select 3">select 3</option>
                                                </select>
                                                <label for="q1">Answer#1 *</label>
                                                <input id="q1" autocomplete="off" className="form-control" type="text" required="" data-required-error="Please enter a security answer." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleId2" className="">Security Question #2 *</label>
                                                <select required="" id="exampleId2" className="form-control">
                                                    <option value="What was the name of the college from which you graduated?">What is your favorite city to visit</option>
                                                    <option value="select 2">select 2</option>
                                                    <option value="select 3">select 3</option>
                                                </select>
                                                <label for="q2">Answer#2 *</label>
                                                <input id="q2" autocomplete="off" className="form-control" type="text" required="" data-required-error="Please enter a security answer." />
                                                <div className="help-block with-errors"> </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleId3" className="">Security Question #3 *</label>
                                                <select required="" id="exampleId3" className="form-control">
                                                    <option value="What was the make and model of your first car?">What is your favorite sports team</option>
                                                    <option value="select 2">select 2</option>
                                                    <option value="select 3">select 3</option>
                                                </select>
                                                <label for="q3">Answer #3 *</label>
                                                <input id="q3" autocomplete="off" className="form-control" type="text" required="" data-required-error="Please enter a security answer." />

                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <button type="submit" className="btn profile-update disabled">Update</button>
                                        </div>

                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    )
}

export default MyProfile;