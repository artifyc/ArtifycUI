import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';
import Grid from './components/grid';
import Routes from "./Routes";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './style/app.css'
import Search from "./components/search";
import Logo from "./assets/artifyc.jpeg";

class App extends React.Component {
  render() {
    return (
      <div>
        <div class="nav">
          <Navbar bg="light" expand="lg">
            <a class="navbar-brand" href="#">
              <img src={Logo} alt="Artifyc" />
            </a>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/artists">Become a Creator </Nav.Link>
            <Nav.Link href="/messages">Messages</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
          </Navbar>
          <Routes />
        </div>
        <Grid />
        <Footer />
      </div>
    )
  }
}


export default App;
