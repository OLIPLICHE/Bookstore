import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/categories" component={Categories} />
    </Switch>
  </Router>
);

export default App;
