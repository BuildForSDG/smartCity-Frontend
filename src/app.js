import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar';
import { 
  Home, Artisans, FreshMart, 
  Footer, Professionals, ContactForm
} from './screens';

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
      <Route path="/professionals">
        <Professionals />
      </Route>
      <Route path="/contact">
        <ContactForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Footer />
  </>
);
export default App;
