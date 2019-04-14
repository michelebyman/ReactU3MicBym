import React, { Component } from 'react'
import styles from '../cssFiles/addRemoveUser.module.css';
import PropTypes from 'prop-types'


// handle users, removes existing users and add new users 

class AddRemoveUser extends Component {
  static propTypes = {
    setNewUser: PropTypes.func,
    removeUserFromApp: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
        name: '',
        username: '',
        email: ''
    } 
  }

  
//  calls a function passing values as arguments from inputs
  handleAddUserOnSubmit = () => {
    if (this.state.name) {
      this.props.setNewUser(
        this.state.name,
        this.state.username,
        this.state.email
      );
    }
    this.setState({
      name: '',
      username: '',
      email: ''
    })
  }

  // set values from target and add it to the selected target.name
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


   // calls a function which removes and updates the new userList not from back-end
   removeUser = () => { 
         this.props.removeUserFromApp()
   }
    

  render() {
    return (
      <div>
       
        <input 
          maxLength="25" type="text" 
          value={this.state.name} 
          name='name'
          placeholder="Name" 
          onChange={this.handleInputChange}
          className={styles.input}
        />
        <input 
          maxLength="25" type="text" 
          value={this.state.username} 
          placeholder="Username" 
          name='username'
          onChange={this.handleInputChange} 
          className={styles.input}
        />
        <input 
          maxLength="25" type="email" 
          value={this.state.email} 
          placeholder="Email" 
          name='email'
          onChange={this.handleInputChange} 
          className={styles.input}
        />

        <button 
          onClick={this.handleAddUserOnSubmit} 
          className={`btn ${styles.btnAdd}`}
        >
          Add
        </button>

        <button 
          onClick={this.removeUser} 
          className={`btn ${styles.btnRemove}`}
        >
          Remove
        </button>
      </div>
    )
  }
}

export default AddRemoveUser; 
