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

     // Handle User Data
    responseFacebook = response => {
        // Console Log Response
        console.log(response);

        // Update State 
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    }

    // Handle Click Event
    componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    // Check If Logged-In
    if(this.state.isLoggedIn){
        // Show User Data
        fbContent = (
            <div style={{ width: '400px', margin: 'auto', background: '#f4f4f4', padding: '20px'}}>
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
                Email: {this.state.email}
            </div>
        );

    } else {
        // Show Log In Button
        fbContent = (
            <FacebookLogin 
                appId="645422394508324"
                autoLoad={false} // Auto Login
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
            />);    
    }

    return (
      // Output to Page
      <div>
        {fbContent}
      </div>
    )
  }
}
