import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Side from "./components/sideBar/Side";
import Profile from "./components/profile/Profile";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { BrowserRouter, Route } from "react-router-dom";




let App = (props) => {

  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />

        <Side />

        <div className="content">

          <Route path="/profile" render={() => <Profile
            store={props.store}
            dispatch={props.dispatch}
          />} />
          <Route path="/Messages" render={() => <MessagesContainer
            store={props.store}
            dispatch={props.dispatch}

          />} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;