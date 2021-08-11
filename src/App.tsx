import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
