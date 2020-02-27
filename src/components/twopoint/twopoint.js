import React from 'react';

export const Box = ({ boxData }) => {
	return (
		<div className="col-md-4 home-tiles">
			<div className="pnc-travel-box">
				<div className="pnc-travel-icon">
					<img src={boxData.src} alt={boxData.alt} />
				</div>
				<div className="pnc-travel-text text-center">
					<h4>{boxData.title}</h4>
					<div className="inner-para"><p>{boxData.desc}</p></div>
				</div>
				<button aria-label="Book Now" className="btn">{boxData.btnText}</button>
			</div>
		</div>
	)
}



const TwoBox = ({ boxData }) => {
	return (
		<section className="pnc-twobox-section">
			<div className="container">
				<div className="pnc-grey-box-content">
					<div className="row justify-content-center">
						{
							boxData.map((el, index) => {
								return <Box boxData={el} key={index} />
							})
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TwoBox;