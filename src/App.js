import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import Help from './components/help/help';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import forgotData from './data/forgot-password.json';

function App() {
  return (
    <React.Fragment>        
      <Router>
        <Header/>
           <Route exact path="/" exact component={()=><Home title="PNC Onyx | Home"/>} />
           <Route exact path="/contact" exact component={()=><Contact title="PNC Onyx | Contact Us"/>} />
           <Route exact path="/help" exact component={()=><Help title="PNC Onyx | Help"/>} />
           <Route exact path="/forgotpassword" exact component={() => <ForgotPassword title="PNC Onyx | ForgotPassword" forgotData={forgotData}/>} />
        <Footer/>
      </Router>
  </React.Fragment>
 
  );
}

export default App;
