import React from 'react';
import ReactDOM from 'react-dom';
import { Form, InputGroup, FormControl, Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import '../style/search.css'

class Search extends React.Component {
  render() {
    return (
      <Navbar className="justify-content-between">
        <Form inline action="/searchResults">
          <Form.Control type="text" placeholder="Search" />
        </Form>
      </Navbar>
    )
  }
}

export default Search;
