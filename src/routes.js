import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Feed from './pages/Feed';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/feed" component={Feed} />
      </Switch>
    </BrowserRouter>
  );
}
