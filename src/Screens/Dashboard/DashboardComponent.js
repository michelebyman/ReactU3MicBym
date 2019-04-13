import React, { Component } from 'react';
import CardComponent from '../.././components/CardComponent'
import AddRemoveUser from '../.././components/AddRemoveUser'
import UserList from '../.././components/UserList'
import PropTypes from 'prop-types'
import withHTTPRequests from '../../HOCS/withHTTPRequests'





// render all the components besides the Navbar/User and holds the list of users
class DashboardComponent extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
  }

   constructor(props) {
     super(props);
     this.state = {
       userList: []
     }
   }

   componentDidMount() {
    const url = this.props.getUserList();
    url.then((response) => {
      return response.json();
    })
    .then((myJson)=> {
      myJson.sort((a, b) => { 
              return a.id - b.id;
            });  
        // console.log(myJson);
      this.setState({
        userList: myJson 
      })
    });
   }
  

// change the string(with a user from input) to an Array, makes a new list, set the new state
   setNewUser = (newUser, userEmail, username) => {
    console.log(newUser);
    console.log(userEmail);
    console.log(username);
      const stringToObject = 
      // {name:newUser, isActive:true}
      // This is less code ;) 
      
      
      {id: this.state.userList.length + 1,
        name:newUser,
        username: username,
        email: userEmail,
        address: {
          city: 'unknown',
          geo: {lat: 0, lng: 0},
          street:'unknown',
          suite: 'unknown',
          zipcode: "92998-3874",
          email: "Sincere@april.biz",
          __v: 0,
          _id: "5caaef896b334800cbf66332" } 
      };

      const allUsers = this.state.userList.concat(stringToObject); 

      // const allUsersWithId = allUsers.map((item, index)=>{
      //   return {
      //     id:index + 1, 
      //     name: item.name,
      //     isActive: item.isActive
      //   }
      // })    
      
      // const isActive = allUsersWithId.filter((item) => 
      //  item.isActive   
      // ); 
      // const isNotActive = allUsersWithId.filter((item)=>
      //   !item.isActive
      // )
      // const completeList = isActive.concat(isNotActive);
      
      //Sorts the list so the list is written in order by id
      allUsers.sort((a, b) => { 
        return a.id - b.id;
      });  
            
     this.setState({
       userList: allUsers
     })
   }

   //create a new array (removes one user), set the new state and update the userList
   removeUserFromApp = () => {
     const reduceUserList = this.state.userList.slice(0,this.state.userList.length -1);
      this.setState({
        userList: reduceUserList
      })
   }

   // renders the components with JSX 
  render() {
    return (
      <div className="wrapper">
      
      <CardComponent cardHeader="User list">
        <UserList users={this.state.userList}/>
      </CardComponent>

      <CardComponent cardHeader="Add and Remove User">
        <AddRemoveUser 
          setNewUser={this.setNewUser}
          removeUserFromApp={this.removeUserFromApp}
        />
      </CardComponent>

      </div>
    );
  }
}

export default withHTTPRequests(DashboardComponent);
