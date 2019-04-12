import React, { Component } from 'react'
import CardComponent from '../.././components/CardComponent'
import UserFunc from './UserFunc'


class User extends Component  {


  render() {
    
    return (
      <div>
        <CardComponent>
   
          <UserFunc 
            userId={this.props.match.params.id}
          />
      
        </CardComponent>
      </div>
    )
  }
}

export default User;
