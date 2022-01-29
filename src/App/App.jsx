import React from "react";
import "./style.scss";
import Entries from "../pages/Entries";
import FoodLibrary from "../pages/FoodLibrary";
import Header from "../components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Entries} />
        <Route path="/library" component={FoodLibrary} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
