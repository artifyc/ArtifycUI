import React from 'react';
import ReactDOM from 'react-dom';
import { Form, InputGroup, FormControl, Button, Navbar, Nav, NavItem } from 'react-bootstrap';

class Search extends React.Component {
  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
    )
  }
}

export default Search;
