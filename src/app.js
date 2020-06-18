import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import { AppBar } from './components/AppBar';
import Cart from './components/cart/Cart'
import Footer from './components/footer';
import ProductDetails from './components/ProductDetails';
import ArtisanDetails from './components/ArtisanDetails'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fonts } from './utils/fonts';
import { Home, Artisans, FreshMart, ContactForm, Register, Account } from './screens';
library.add(...fonts);

const Div = styled.div`
  font-family: 'Montserrat', sans-serif;
`;
const App = () => (
  <Div>
    <AppBar />
    <Cart />
    <Switch>
      <Route path="/freshmart/:id/details">
        <ProductDetails />
      </Route>
      <Route path="/freshmart">
        <FreshMart />
      </Route>
      <Route path="/artisans/:id/details">
        <ArtisanDetails />
      </Route>
      <Route exact path="/artisans">
        <Artisans />
      </Route>
      <Route path="/contact">
        <ContactForm />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Div>
);
export default App;
