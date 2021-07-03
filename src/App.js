import React from "react";
import "./App.css"
import Header from "./components/header/Header";
import Side from "./components/sideBar/Side";
import Profile from "./components/profile/Profile";
import Messages from "./components/Messages/Messages";
import { BrowserRouter, Route } from "react-router-dom";




let App = (props) => {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />

        <Side />

        <div className="content">
          <Route path="/profile" render={() => <Profile PostData={props.PostData} PostsElements={props.PostsElements} />} />
          <Route path="/Messages" render={() => <Messages partnersData={props.partnersData}
            messagesData={props.messagesData}
            partnersElements={props.partnersElements}
            messagesElements={props.messagesElements}

          />} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;