import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import SignUp from "./SignUp";


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser=> {
      console.log("the user is >>>>>", authUser);
      if (authUser){
        //user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>

          <Route exact path="/" >
            <Header />
            <Home />
          </Route>

          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>

          <Route path="/login" >
            <Login/>
          </Route>

          <Route path="/signup" >
            <SignUp/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
