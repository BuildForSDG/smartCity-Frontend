import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown,Form, Button, FormControl, NavItem} from 'react-bootstrap'


export const AppBar = () => 
<Navbar bg="primary" variant="dark" expand="lg">
<Navbar.Brand><Link to='/' style={styles.item}>SMARTCITY</Link></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto" >
    <NavItem style={styles.root}><Link to='/' style={styles.item}>Home</Link></NavItem>
    <NavItem style={styles.root}><Link to='/freshmart' style={styles.item}>Freshmart</Link></NavItem>
    <NavItem style={styles.root}><Link to='/artisans' style={styles.item}>Artisans</Link></NavItem>
    <NavItem style={styles.root}><Link to='/professionals' style={styles.item}>Professionals</Link></NavItem>
    <NavDropdown title="Other Services" id="basic-nav-dropdown" style={styles.root}>
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  <Form inline style={styles.root}>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-success">Search</Button>
  </Form>
</Navbar.Collapse>
</Navbar>

const styles = {
  root:{
  margin:'0 10px',
  height:'100% !important',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
  },
  item:{
    color:'white',
  textDecoration:'none',
  opacity:0.8
  }
}