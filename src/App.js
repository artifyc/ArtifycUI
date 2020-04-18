import React, { Component } from 'react';
import 'react-typist/dist/Typist.css';
import './style/App.css'
import HeaderBar from './components/Header/HeaderBar';
import { Auth } from 'aws-amplify';
import { Link, useHistory } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
        <div>
            <HeaderBar />
        </div>
    )
  }
}


export default App;
