import React from 'react';

import BonusPoint from './../bonuspoint/bonuspoint';
import TwoBox from './../twopoint/twopoint';
import HomeBanner from './../homebanner/homebanner';
import RewardsWrapper from './../rewardswrapper/rewardswrapper';
import homeData from './../../data/home.json';



const Home = () => {
    return(
      <>
          <HomeBanner homeBanner={homeData.homeBanner}/>
          <TwoBox boxData={homeData.boxData}/>
          <BonusPoint/>
          <RewardsWrapper rewards={homeData.rewards}/>
     </>  
    )
}

export default Home;