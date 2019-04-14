import React, { Component }from 'react'

//handle API-requests 
export default function withHTTPRequests(WrappedComponent, selectedData) {
  return class  extends Component {

    //fetching singel user information from API
    getSingleUser = () => {
      return fetch(`http://api.softhouse.rocks/users/${this.props.userId}`)
    }
    //fetching the user list from API
    getUserList = () => {
      return fetch('http://api.softhouse.rocks/users/')
    }

      //fetching the user list from API adding a new user to the API users list
    createNewUser = (newUser) => {
      const url = 'http://api.softhouse.rocks/users/15';
      return  fetch(url, {
        method: 'PUT', // or 'PUT' 
        body: JSON.stringify(newUser), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
      }
    })
    }

   
    render() {

      return <WrappedComponent 
                getSingleUser={this.getSingleUser}
                getUserList={this.getUserList}
                createNewUser={this.createNewUser}
                {...this.props}
              />
    }
  };
}