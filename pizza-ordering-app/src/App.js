import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PizzaOrderForm from './PizzaOrderForm';
import HomePage from '../pizza-ordering-app/components/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pizza" component={PizzaOrderForm} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
