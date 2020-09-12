import React from "react";
import { Navbar, SearchQuestion, AddQuestions, Welcome } from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/app.scss";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <Welcome />
              </div>
            )}
          />
          <Route path="/add-question" exact component={AddQuestions} />
          <Route path="/search-question" exact component={SearchQuestion} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
