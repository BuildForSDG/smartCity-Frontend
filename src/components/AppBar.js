import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../images/logo.png'
// import styled from 'styled-components';

export const AppBar = () => (
  <Navbar style={{ backgroundColor: 'rgba(4, 9, 110, 0.95)', padding:0 }} bg="pimary" variant="dark" expand="md">
    <Navbar.Brand>
      <Link to="/" style={styles.item}>
        <img src={logo} height="70" className="d-inline-block align-top" alt="smart city logo" />
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavItem style={styles.root}>
          <Link to="/" style={styles.item}>
            Home
          </Link>
        </NavItem>
        <NavItem style={styles.root}>
          <Link to="/freshmart" style={styles.item}>
            Freshmart
          </Link>
        </NavItem>
        <NavItem style={styles.root}>
          <Link to="/artisans" style={styles.item}>
            Artisans
          </Link>
        </NavItem>

        <NavItem style={styles.root}>
          <Link to="/contact" style={styles.item}>
            Contact Us
          </Link>
        </NavItem>
      </Nav>
      <NavItem style={styles.root}>
        <Link to="/register" style={styles.item}>
          Register
        </Link>
      </NavItem>
      <NavItem style={styles.root}>
        <Link to="/account" style={styles.item}>
          Account
        </Link>
      </NavItem>
    </Navbar.Collapse>
  </Navbar>
);

const styles = {
  root: {
    padding: '0 15px',
    height: '100% !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    color: 'white',
    textDecoration: 'none',
    opacity: 0.8
  }
};
