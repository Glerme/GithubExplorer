import React from "react";
import Dashboard from "../pages/Dashboard";
import Repositorio from "../pages/Repository";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repositorio} />
  </Switch>
);

export default Routes;
