import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Side from "./components/sideBar/Side";
import Profile from "./components/profile/Profile";


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