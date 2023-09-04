import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './_tests_/components/HomePage';
import PizzaOrderForm from './_tests_/components/PizzaOrderForm';
import "./App.js"

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/pizza" component={PizzaOrderForm} />
      <Route path="/" component={HomePage} />
      <h1>Teknolojik Yemekler</h1>
      <p>Burdaki kodu silip kendi headerınızı ekleyebilirsiniz</p>
      <HomePage/>
      <PizzaOrderForm/>
    </Switch>
  </Router>
     
  );
};



export default App;
