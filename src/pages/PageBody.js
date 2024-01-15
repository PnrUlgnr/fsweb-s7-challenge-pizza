import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import PizzaOrderForm from "./PizzaOrderForm";

function PageBody(){
    
    return (
        <Switch>
            <Route path = "/" name = "HomePage" exact>
                <HomePage />
            </Route>
            <Route path = "/pizza" name = "PizzaOrder">
                <PizzaOrderForm />
            </Route>
        </Switch>
    )
}
export default PageBody;