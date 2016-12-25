import React from "react";
import { Link } from "react-router"

 class Login extends React.Component {

  render() {

    return(

      <div>
        <h1>login Page </h1>
        <button><Link to="/main">Login</Link></button>
      </div>
    )
  }
}

export default Login;
