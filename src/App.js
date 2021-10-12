import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import { AuthProvider } from "./components/Auth";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
