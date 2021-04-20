import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/Contactus';
import Gallery from './components/pages/Gallery';
import Navbar from './components/pages/Navbar';
import logo from './logo.svg';
import './App.css';
import ScrollToTop from './components/pages/ScrollToTop';
import Footer from './components/pages/Footer'

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      {/* <Switch> */}
        <Route 
          path='/' exact 
          render={({history})=>(<Home history={history}/>)} 
        />
        <Route 
          path='/AboutUs' 
          render={({history})=>(<AboutUs history={history}/>)}
        />
        <Route 
          path='/ContactUs' 
          render={({history})=>(<ContactUs history={history}/>)}
        />
        <Route 
          path='/Gallery' 
          render={({history})=>(<Gallery history={history}/>)}
        />
      {/* </Switch> */}
    </Router>
    <Footer/>

  </>
  );
}

export default App;
