import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import { AppBar } from './components/AppBar';
import Footer from './components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fonts } from './utils/fonts'
import { Home, Artisans, FreshMart, ContactForm, Register, Account } from './screens';
library.add(...fonts);

const Div = styled.div`
font-family: 'Montserrat', sans-serif;
`
const App = () => (
  <Div>
    <AppBar />
    <Switch>
      <Route path="/freshmart">
        <FreshMart />
      </Route>
      <Route path="/artisans">
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
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Div>
);
export default App;
