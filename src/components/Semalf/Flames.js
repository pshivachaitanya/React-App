
import {useState } from 'react'
import React from 'react'
import './index.css'

const Flames = (props) => {
  var [enteredName,setEnteredName]=useState("")
  var [enteredName2,setEnteredName2]=useState("")

  
 
  

const nameOne=event=>{setEnteredName(event.target.value)}

const nameTwo=event=>{setEnteredName2(event.target.value)}


const submitNames=event=>{
  event.preventDefault();

  for(let i=0; i<(enteredName.length);i++){
    for(let j=0; i<(enteredName2.length);j++){
      if(enteredName[i]===enteredName2[j]){
        enteredName=enteredName.slice(0,i)+enteredName.slice(i+1);
        enteredName2=enteredName2.slice(0,j)+enteredName2.slice(j+1);
        break;
      }
    }
  }
  console.log(enteredName+enteredName2)

}


 
  return (
    <div className="login-box">
        <h2>Log In</h2>
      <form  onSubmit={submitNames}>
      <div className="user-box">
      <input type='text' nmae='' required='' onChange={nameOne}/>
      <label>Userid</label>
      </div>
      <div className="user-box">
      <input type='text' nmae='' required='' onChange={nameTwo}/>
      <label>Password</label>
      </div>
      <button className="btn_submit">
        
        Login
      </button>
      </form>
      <h1>{}</h1>
    </div>
  )
}

export default Flames
