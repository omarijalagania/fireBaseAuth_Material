import React, { useState, useEffect, useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SideMenu from "./components/SideMenu";
import { firestore } from "@firebase/firestore-compat";
import firebase from "@firebase/app-compat";
import Reset from "./components/Reset";

const App = () => {
  const [todosData, setTodosData] = useState([]);

  const db = firebase.firestore();

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodosData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          isDone: doc.data().isDone,
          uid: doc.data().uid,
        }))
      );
    });
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <NavBar />
      {/* <SideMenu /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/dashboard"
            todosData={todosData}
            component={Dashboard}
            data={todosData}
          />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/reset" component={Reset} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
