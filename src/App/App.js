import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreatePage from '../CreatePage/CreatePage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/homePage">
          <HomePage />
        </Route>
        <Route path="/createPage">
          <CreatePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
