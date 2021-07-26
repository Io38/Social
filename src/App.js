import React from "react";
import "./App.css"
import Side from "./components/sideBar/Side";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Route, withRouter} from "react-router-dom";
import FindUsersContainer from "./components/find_users/FindUsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/login";
import './App.css'
import {connect} from "react-redux";

import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/preloader/Preloader";


class App extends React.Component {

componentDidMount() {

  this.props.initializeApp();
}


  render() {
      {
          if (this.props.initialized === false){
              return <Preloader />
          }
      }
      return (

          <div className="app_wrapper">
            <HeaderContainer/>

            <Side/>

            <div className="content">

              <Route path="/profile:userId?"
                     render={() => <ProfileContainer/>}/>

              <Route path="/Messages"
                     render={() => <MessagesContainer/>}/>

              <Route path="/find-users"
                     render={() => <FindUsersContainer/>}/>

              <Route path="/login"
                     render={() => <Login/>}/>

            </div>

          </div>

    )
  }
}

const mapStateToProps = (state) =>({

    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps ,{initializeApp})
)(App)
