import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Side from "./components/sideBar/Side";
import Profile from "./components/profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { BrowserRouter, Route } from "react-router-dom";
import FindUsersContainer from "./find_users/FindUsersContainer";




let App = (props) => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />

        <Side />

        <div className="content">

          <Route path="/profile" render={() => <Profile />} />
          <Route path="/Messages" render={() => <MessagesContainer />} />
          <Route path="/find-users" render={() => <FindUsersContainer />} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;