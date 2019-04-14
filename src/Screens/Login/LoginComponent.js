import React, { Component } from 'react'
import CardComponent from '../.././components/CardComponent'
import styles from '../.././cssFiles/login.module.css';
import PropTypes from 'prop-types'


//Handle login 
class LoginComponent extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
  }

     constructor(props){
    super(props);
    this.state = {
      showOrHide: false,
      value: ''
    }
  }

  // change value and setState to the opposite 
  showAndHideInfo = () => {
    this.setState({
      showOrHide: !this.state.showOrHide
    })
   }

   // Takes us to the dashboard if we type more then 6 letter in the login field 
   navigate = (event) => {
       if (this.state.value.length > 6) {
           this.props.history.push('/dashboard')
       }  
       this.setState({
           value: ''
       })
   }

  // set state and update it with the target value
    getUser = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    

  render() {
    return (
      <div>
        <CardComponent myInfo="You need to click on the login button to login and use 7 letters to be able to login :) ">

          <input 
            maxLength="30" 
            type="text" 
            value={this.state.value} 
            placeholder="Login.." 
            onChange={this.getUser}  
            className={styles.input}
          />

          <button 
            onClick={this.navigate} 
            className={`btn ${styles.btnAdd}`}
          >
            Login
          </button>
        </CardComponent>
        
      </div>
    )
  }
}

export default LoginComponent;
