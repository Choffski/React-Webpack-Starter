import React from "react";
import { Link } from "react-router"


 class Main extends React.Component {

  render() {

    return(

      <div>
        <h1>Main Page </h1>
        <button><Link to="/">Logout</Link></button>
      </div>
    )
  }
}

export default Main;
