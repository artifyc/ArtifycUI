import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Logo from "../assets/artifyc.jpeg";

class Header extends React.Component {
  render() {
    return (
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
    </div>
  )
  }
}

export default Header;
