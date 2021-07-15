import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Side from "./components/sideBar/Side";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { BrowserRouter, Route } from "react-router-dom";
import FindUsersContainer from "./find_users/FindUsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";




let App = (props) => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <HeaderContainer />

        <Side />

        <div className="content">

          <Route path="/profile:userId?"
            render={() => <ProfileContainer />} />

          <Route path="/Messages"
            render={() => <MessagesContainer />} />

          <Route path="/find-users"
            render={() => <FindUsersContainer />} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;