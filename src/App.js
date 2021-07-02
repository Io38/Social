import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Side from "./components/sideBar/Side";
import Profile from "./components/profile/Profile";
import Messages from "./components/Messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";


let App = () => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />

        <Side />

        <div className="content">
          <Route path="/profile" component={Profile} />
          <Route path="/Messages" component={Messages} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;