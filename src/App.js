// import logo from './logo.svg';
import React from 'react';
import './App.css';

import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';

function App() {
  const [page, setPage] = React.useState('home');
  return (
    <div className="App">
      <Navbar className="px-2" bg="primary" expand="lg" variant='dark'>
        <Container fluid>
          <Navbar.Brand href="#">Blogs</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        {page === 'home' && <Home onMove={setPage}/>}
      </main>
    </div>
  );
}

export default App;
