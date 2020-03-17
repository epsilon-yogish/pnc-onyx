import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Help from './components/help/help';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import RetriveUsername from './components/retriveUsername/retriveusername';
import MyProfile from './components/myProfile/myProfile';
import MyCommunication from './components/myCommunication/myCommunication';
import MyAccount from './components/myAccount/myAccount';
import MessageDetails from './components/messageDetails/messageDetails';
import Transaction from './components/transaction/transaction';
import OrderHistory from './components/orderHistory/orderHistory';
import RewardMessages from './components/rewardMessage/rewardMessages';
import forgotData from './data/forgot-password.json';


function App() {
  return (
    <React.Fragment>        
      <Router>
        <Header/>
           <Route exact path="/" exact component={()=><Home title="PNC Onyx | Home"/>} />
           <Route exact path="/contact" exact component={()=><Contact title="PNC Onyx | Contact Us"/>} />
           <Route exact path="/help" exact component={()=><Help title="PNC Onyx | Help"/>} />
           <Route exact path="/retrive-username" exact component={()=><RetriveUsername title="PNC Onyx | retrive-username"/>} />
           <Route exact path="/myCommunication" exact component={()=><MyCommunication title="PNC Onyx | myCommunication"/>} />
           <Route exact path="/myAccount" exact component={()=><MyAccount title="PNC Onyx | myAccount"/>} />
           <Route exact path="/messageDetails" exact component={()=><MessageDetails title="PNC Onyx | messageDetails"/>} />
           <Route exact path="/transaction" exact component={()=><Transaction title="PNC Onyx | transaction"/>} />
           <Route exact path="/orderHistory" exact component={()=><OrderHistory title="PNC Onyx | orderHistory"/>} />
           <Route exact path="/myProfile" exact component={()=><MyProfile title="PNC Onyx | myProfile"/>} />
           <Route exact path="/rewardMessages" exact component={()=><RewardMessages title="PNC Onyx | rewardMessages"/>} />           
           <Route exact path="/forgotpassword" exact component={() => <ForgotPassword title="PNC Onyx | ForgotPassword" forgotData={forgotData}/>} />
        <Footer/>
      </Router>
      
  </React.Fragment>
 
  );
}

export default App;
