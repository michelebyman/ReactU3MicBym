import React, { Fragment, useState, useEffect } from 'react'
import Styles from './user.module.css'
import withHTTPRequests from '../../HOCS/withHTTPRequests'

// show user information and toggle info
function userFunc({getSingleUser})  {
//  console.log(getSingleUser);
 
//use useState to set user and toggleTrueOrFalse
  const [user, setUser] = useState(Object)
  const [toggleTrueOrFalse, setToggle] = useState(true)

  //toggle true or false
 const toggleFunc = () => {
  setToggle(!toggleTrueOrFalse)  
 }

 // HOOK that fetch the single user from the API and then set the user to the user from API
 useEffect(() => {
   
      const url = getSingleUser()

      url.then((response) => {
        return response.json();
      })
      .then((myJson)=> {
          setUser(myJson) 
      });
  }, []);

  
    return (
      <Fragment>
        <img alt="cat" src="http://placekitten.com/300/300" />
        <div className={Styles.div}>
          <h1 className={Styles.h1}>{user.username}</h1>
          <p className={Styles.pName} >{user.name}</p>
          <p className={Styles.p}>{user.email}</p>
          {user && !toggleTrueOrFalse &&
            <Fragment>
              <h1 className={Styles.h1}>{user.address.city}</h1>
              <h1 className={Styles.h1}>{user.address.street}</h1>
              <h1 className={Styles.h1}>{user.address.suite}</h1>
            </Fragment>
          }
        </div>
        {toggleTrueOrFalse ? 
          <button className={`btn ${Styles.ToggleBtn}`} onClick={toggleFunc}>Show address</button> 
        :
          <button className={`btn ${Styles.ToggleBtn}`} onClick={toggleFunc}>Hide address</button> 
        }
        
      </Fragment> 
      )
  }
  
  


export default withHTTPRequests(userFunc);
