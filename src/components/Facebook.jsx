import React, { Component } from 'react';
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    
    // Define Initial State
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    // Console Log Response
    responseFacebook = response => {
        console.log(response);
    }

    // Handle Click Event
    componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    // Check If Logged-In
    if(this.state.isLoggedIn){

        fbContent = null;

    } else {
        // Update fbContent
        fbContent = (
            <FacebookLogin 
                appId="645422394508324"
                autoLoad={true} // Auto Login
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />);    
    }

    return (
      <div>
        {fbContent}
      </div>
    )
  }
}
