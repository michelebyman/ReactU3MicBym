import React, { Fragment, useState, useEffect } from 'react'
import Styles from './user.module.css'


function userFunc({userId})  {
 
  const [user, setUser] = useState('')
  const [toggleTrueOrFalse, setToggle] = useState(true)


 const toggleFunc = () => {
  setToggle(!toggleTrueOrFalse)  
 }

 useEffect(() => {
      fetch(`http://api.softhouse.rocks/users/${userId}`)
      .then((response) => {
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
          {user.address && !toggleTrueOrFalse &&
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
  
  


export default userFunc;
