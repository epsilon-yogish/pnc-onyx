import React from 'react';

const Help = () => {
    return(
        <section className="pnc-help-section">
    <div className="container">
        <div className="row">
            <div className="offset-md-2 col-md-8">
                   <div className="pnc-help">
                       <h3 role="heading" aria-level="1">Help</h3>
                       <p>Curious about how to earn points? Wondering about Favorites? We have the answers you're looking for. From catalog to customer service and everything in between, you'll ﬁnd it in our FAQs. </p>
                       <div className="row">
                           <div className="col-md-6 text-center">
                           <div className="pnc-help-inner pnc-help-inner-first">
                               <p className="pnc-faq">Common Questions</p>
                               <p>How do I earn points?</p>
                               <p className="pnc-pionts">How quickly will points be credited to my account?</p>
                               <button className="btn">FAQs</button>								
                           </div>
                          </div>						   
                       </div>
                   </div>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Help;