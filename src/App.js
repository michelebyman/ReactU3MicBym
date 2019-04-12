import React, { Component } from 'react';
import './App.css';
import DashboardComponent from './Screens/Dashboard/DashboardComponent'
import User from './Screens/User/User'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router , Route, Redirect } from 'react-router-dom'
import LoginComponent from './Screens/Login/LoginComponent';
// import { Route, Redirect } from 'react-router'

// render all the components and holds the list of users
class App extends Component {

  // redirect component 
  Redirect = () => {
    return <Redirect to='/login'/>
  }

   // renders the components with JSX 
  render() {
    return (
      <div className="wrapper">
      
      <Router>
        <NavbarComponent/>

        <Route path="/dashboard" exact component={DashboardComponent}/>
        <Route path="/login" exact component={LoginComponent}/>
        <Route path="/" exact component={this.Redirect}/>
        <Route path="/user" exact component={this.Redirect}/>
        <Route path="/user/:id" exact component={User}/>
      </Router>
      </div>
    );
  }
}

export default App;
