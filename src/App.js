import React from "react";
import "./App.css"
import Header from "./components/Header";
import Side from "./components/Side";
import Profile from "./components/Profile";


let App = () => {
  return (

    <div className="app_wrapper">


      <Header />

      <Side />

      <Profile />


    </div>
  )
}

export default App;