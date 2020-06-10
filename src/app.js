import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import Footer from './components/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faEnvelope, faEllipsisV, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Home, Artisans, FreshMart, ContactForm, Register, Account } from './screens';
library.add(fab, faCheckSquare, faCoffee, faEnvelope, faShareAlt, faEllipsisV);

const App = () => (
  <>
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
  </>
);
export default App;
