import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown,Form, FormControl, NavItem} from 'react-bootstrap'
import styled from 'styled-components';


export const AppBar = () => 
<Navbar style={{backgroundColor: 'rgba(4, 9, 110, 0.95)', paddingLeft: '5%', paddingRight: '5%' }} bg="pimary" variant="dark" expand="lg">
<Navbar.Brand><Link to='/' style={styles.item}>SMARTCITY</Link></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto" >
    <NavItem style={styles.root}><Link to='/' style={styles.item}>Home</Link></NavItem>
    <NavItem style={styles.root}><Link to='/freshmart' style={styles.item}>Freshmart</Link></NavItem>
    <NavItem style={styles.root}><Link to='/artisans' style={styles.item}>Artisans</Link></NavItem>
    <NavItem style={styles.root}><Link to='/register' style={styles.item}>Register</Link></NavItem>
    <NavItem style={styles.root}><Link to='/account' style={styles.item}>Account</Link></NavItem>
    <NavItem style={styles.root}><Link to='/contact' style={styles.item}>Contact Us</Link></NavItem>
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
    <ActionButton>Search</ActionButton>
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

const ActionButton = styled.button`
  background-color: #FFAF30;
  border: none;
  color: rgba(4, 9, 110, 0.95);
  padding: 8px 12px;
  border-radius: 5px;
  // :hover {
  //   color: rgba(4, 9, 110, 0.95);
  // }
`;