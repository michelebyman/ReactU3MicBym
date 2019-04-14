import React, { Component } from 'react'
import CardComponent from '../.././components/CardComponent'
import UserFunc from './UserFunc'

// render the card after we clicked on a user in the user list
class User extends Component  {


  render() {
    // console.log(this.props.match.params.id);
    
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
