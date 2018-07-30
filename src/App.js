import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import Box1 from './Membercomponent.js';
import Box2 from './requestSummary';

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <div id="content">
          <div id='advert'>Online MBA in 1 Year -Online MBA International Business in 1 year. Get more information!</div>
          <Box1/>
          <Box2 />
        </div>
       
        <Footer />
      </div>
    );
  }
}

export default App;
