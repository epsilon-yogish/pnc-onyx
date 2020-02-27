import React from 'react';

export const RewardCard = ({ reward }) => {
    return (
        <div className="col-md-4">
            <div className="pnc-reward-inner-wrap">
                <div className="pnc-reward-image">
                    <img src={reward.src} alt={reward.alt} />
                    <div className="pnc-reward-overtext">
                        <span>{reward.caption}</span>
                        <span className="font-weight-bold">{reward.captionTitle}</span>
                    </div>
                </div>
                <div className="pnc-reward-content">
                    <p className="pnc-reward-first">{reward.title} </p>
                    <p className="pnc-reward-sec">{reward.desc} </p>
                    <button className="btn">{reward.btnText} </button>
                </div>

            </div>
        </div>
    )
}

const RewardsWrapper = ({ rewards }) => {
    return (

        <section className="pnc-rewards">
            <div className="container">
                <div className="pnc-container-wrap">
                    <div className="row">
                        {
                            rewards ?
                                rewards.map((reward, index) => {
                                    return <RewardCard reward={reward} key={index} />
                                })
                                : false
                        }

                    </div>
                </div>
            </div>
        </section>

    )
}

export default RewardsWrapper;