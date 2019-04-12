import React, { Component } from 'react'
import styles from '../cssFiles/Navbar.module.css';
import {NavLink} from 'react-router-dom'

// navbar and handle the NavLinks and navigate to the selected pages
class NavbarComponent extends Component {
  render() {

    return (
      <div>
          <nav className={styles.navbar}>
          
            <NavLink 
              className={styles.navLinks} 
              activeClassName={styles.activeNav} 
              to='/login'
            >
              Login
            </NavLink>          
            <NavLink 
              className={styles.navLinks} 
              activeClassName={styles.activeNav} 
              to='/dashboard'
            >
              Dashboard
            </NavLink>          
            <NavLink 
              className={styles.navLinks}
              activeClassName={styles.activeNav}  
              to='/user'
            >
              User
            </NavLink>
          </nav>
      </div>
    )
  }
}

export default NavbarComponent;
