import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import spisakKnjiga from './knjige';
import Biblioteka from "./Biblioteka";
import Knjiga from "./Knjiga";

function App() {


  const nadjiKnjiguPoId = (id) => {
    return spisakKnjiga.find(Knjiga => Knjiga.id == id)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Biblioteka knjige={spisakKnjiga} />
        </Route>
        <Route path="/:id">
          <Knjiga nadjiKnjiguPoId={nadjiKnjiguPoId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
