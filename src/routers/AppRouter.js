import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if(user?.uid){ // ? el objeto user tiene algo rpegunta el uid
        dispatch(login(user.uid, user.displayName))
      }
    });
  }, [])


  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />

          <Route exact path="/" component={JournalScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};