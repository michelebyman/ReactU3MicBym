import React, { Component }from 'react'


export default function withHTTPRequests(WrappedComponent, selectedData) {
  return class  extends Component {
   
    render() {

      const user = fetch(`http://api.softhouse.rocks/users/7`)
      .then((response) => {
        return response.json();
      })
      .then((myJson)=> {
        return myJson
      });

      return <WrappedComponent singleUser={user}/>
    }
  };
}