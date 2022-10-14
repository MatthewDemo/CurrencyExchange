import React from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import About from './About/About';
import Contacts from './Contacts/Contacts'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="site">
        <Header />

        <div className="container">
          <main>
            <Router>
              <Routes>
                <Route exact path="/" element={<Rate />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contacts" element={<Contacts />} />

              </Routes>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie info">
          <div className="site-content">
            <div className="well"> Курсы валют берутся из публичного API и совпадают со значениями курсов НБУ &nbsp; </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
