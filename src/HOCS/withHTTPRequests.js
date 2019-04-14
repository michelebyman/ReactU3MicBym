import React, { Component }from 'react'


export default function withHTTPRequests(WrappedComponent, selectedData) {
  return class  extends Component {


    getSingleUser = () => {
      return fetch(`http://api.softhouse.rocks/users/${this.props.userId}`)
    }

    getUserList = () => {
      return fetch('http://api.softhouse.rocks/users/')
    }

    createNewUser = (newUser) => {
      const url = 'http://api.softhouse.rocks/users/15';
     return  fetch(url, {
      method: 'PUT', // or 'POST'
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
              />
    }
  };
}