import React, { Component } from 'react'
import styles from '../cssFiles/UserList.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


// displays the user list after mapping through an array 
class UserList extends Component {
  static propTypes = {
    users: PropTypes.array
  }

   constructor(props) {
     super(props);
     this.state = {
       toggleColor: true,
       showActiveOrNotActive: true,
     }
   }

    // change value and setState to the opposite 
   showActiveOrNotActive = () => {
     this.setState({
       showActiveOrNotActive: !this.state.showActiveOrNotActive
     })  
   }

   // change value and setState to the opposite 
   toggleColorUserList = () => {
       this.setState({
         toggleColor: !this.state.toggleColor
       })
         }

  render() {

    // maps through the array that comes from the the app.js returns every item in the list as an list Item
    //checks if the state is true or not and match it with another state then filter a new list of users, sets a Link 
    const users = this.props.users.map((user, i) =>
        <Link key={i} to={`/user/${user.id}`} 
          className={ this.state.toggleColor ? styles.trueColor : styles.falseColor}> 
          <li className={styles.listItem}>
            {user.id}.&nbsp;
            {user.name}
          </li>
        </Link> 
    );

    
  
    return (
      <div className={styles.divWrapper}>
     
        <ul className={styles.userList}>
         {users} 
        </ul>
        
        <button 
          onClick={this.toggleColorUserList} 
          className={`btn ${styles.ToggleBtn}`}
        >
          Toggle Color
        </button>
        
      </div>
    )
  }
}

export default UserList;
