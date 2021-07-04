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

          <Route path="/profile" render={() => <Profile
            PostData={props.state.profile.PostData}
            PostsElements={props.state.profile.PostsElements}
            addPost={props.addPost}
          />} />
          <Route path="/Messages" render={() => <Messages
            partnersData={props.state.messages.partnersData}
            messagesData={props.state.messages.messagesData}
            partnersElements={props.state.messages.partnersElements}
            messagesElements={props.state.messages.messagesElements}

          />} />

        </div>

      </div>
    </BrowserRouter>
  )
}

export default App;