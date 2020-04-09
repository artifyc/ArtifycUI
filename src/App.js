import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Footer from './components/footer';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './style/App.css'
import TopSection from './components/Homepage/TopSection';
import AboutSite from './components/Homepage/AboutSite';
import HowItWorks from './components/Homepage/HowItWorks';
import Form from './components/Homepage/Form';


class App extends React.Component {

  render() {
    return (
      <div>
        <div><TopSection /></div>
        <div><AboutSite /></div>
        <div><HowItWorks /></div>
        <div><Form /></div>
      </div>
    )
  }
}


export default App;
