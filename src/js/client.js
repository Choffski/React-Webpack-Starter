import React from "react";
import ReactDOM from "react-dom";
import {
  Router, Route, IndexRoute, hashHistory
} from "react-router";

import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";




const app = document.getElementById('app');


ReactDOM.render(

   <Router history={hashHistory}>
   <Route path="/" component={Login}> </Route>
   <Route path="/main" component={Main}>

   </Route>

   </Router>,
 app)
