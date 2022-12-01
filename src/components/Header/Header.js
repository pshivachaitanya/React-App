import React from 'react'
import {Link} from 'react-router-dom'


import './Header.css';


const Header = () => {
  

  
 
  return (
    <div class="topnav body cva" >
    <Link to='./movies'><li>Movie</li>  </Link>
    <Link  to='/accordion'><li>Accordion</li> </Link>
    <Link  to='/timer'><li>Timer</li> </Link>
    <Link  to='/flames'><li>Login Form</li> </Link>
    </div>
  
  )
  }

export default Header
