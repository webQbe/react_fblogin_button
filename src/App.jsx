import React, { Component } from 'react';
import Facebook from './components/Facebook';
import './App.css';

class App extends Component {
  render() {
    return (    
        <div className="App">
            <header className="App-header">
                <h4 className="App-title">Facebook Auth Example</h4>
            </header>
            <p className="App-intro">
                To get started, authenticate with Facebook.
            </p>
            <Facebook /> 
        </div>        
    )
  }
}

export default App;
