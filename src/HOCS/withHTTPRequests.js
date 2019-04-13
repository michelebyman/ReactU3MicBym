import React, { Component }from 'react'


export default function withHTTPRequests(WrappedComponent, selectedData) {
  return class  extends Component {


    getSingleUser = () => {
      return fetch(`http://api.softhouse.rocks/users/${this.props.userId}`)
    }

    getUserList = () => {
      return fetch('http://api.softhouse.rocks/users/')
    }

   
    
   
    render() {

      return <WrappedComponent 
                getSingleUser={this.getSingleUser}
                getUserList={this.getUserList}
              />
    }
  };
}