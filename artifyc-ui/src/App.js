import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';
import Grid from './components/grid';
import Routes from "./Routes";
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <div class="nav">
          <Navbar>
            <Link to="/">Home</Link>
            <Link to="/artists">Become a Creator</Link>
            <Link to="/messages">Messages</Link>
            <Link to="/orders">Orders</Link>
          </Navbar>
          <Routes />
        </div>


        <Footer />
      </div>
    )
  }
}


export default App;
