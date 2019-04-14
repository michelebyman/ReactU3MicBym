import React, { Component } from 'react';
import CardComponent from '../.././components/CardComponent'
import AddRemoveUser from '../.././components/AddRemoveUser'
import UserList from '../.././components/UserList'
import PropTypes from 'prop-types'
import withHTTPRequests from '../../HOCS/withHTTPRequests'





// render components and handle new users and the user list
class DashboardComponent extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
  }

   constructor(props) {
     super(props);
     this.state = {
       userList: [],
     }
   }

  // get the API list from HOCS-withHTTPRequests runs after render works
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


// create a new object with the user details from the input fields.... update UI works
   setNewUser = (newUser, userEmail, username) => {
      const newUserObject =   
      {
        // id: this.state.userList.length + 1,
        name:newUser,
        username: username,
        email: userEmail,
        address: {
          city: 'unknown',
          street:'unknown',
          suite: 'unknown',
          zipcode: "unknown",
          geo: {
            lat: 0,
             lng: 0
            },
           } 
      };
      // console.log(newUserObject);

      const user = newUserObject;
      this.props.createNewUser(user).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .then(()=>{
        //Updates the UI
        this.props.getUserList()
        .then(result => result.json())
        .then(data => {
          this.setState({
            userList: data 
          })
        },) 
      }).catch(error => console.error('Error:', error));
   }

   //create a new array (removes one user), set the new state and update the userList not from API
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
