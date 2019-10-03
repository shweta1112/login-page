import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './userList.css';
import UserList from './UserList'
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.
The instructions for this project are located in the instructions.md file.
*/
class App extends Component {
 state={
  users: {},
  userName: "",
  numberOfGame: 0,
  firstName: "",
  lastName: "",
  isAddDisabled: true,
 }
 toggleUserScore = (userName) => {
   let updatedUsers = this.state.users
   updatedUsers[userName].showScore = !updatedUsers[userName].showScore
   this.setState(() => ({
      users: updatedUsers,
   }))
 }
incrementUserGameCount = (userName) => {
 let updatedUsers = this.state.users
 updatedUsers[userName].numberOfGame = updatedUsers[userName].numberOfGame + 1
  this.setState(() => ({
      users: updatedUsers,
   }))
}
 addUser = () => {

   var user = {};
   user['firstName'] = this.state.firstName 
   user['lastName'] = this.state.lastName
   user['userName'] = this.state.userName
   user['numberOfGame'] = 0
   user['showScore'] =  true
   if(this.state.users[this.state.userName])
     alert("User " + this.state.userName + " already exists.");
   let updatedUsers = this.state.users
   updatedUsers[this.state.userName] = user
   this.setState(() => ({
     users: updatedUsers
   }))
 }
 onFirstNameChange = (value)  => {
   this.setState(() => ({
     firstName : value,
     isAddDisabled: (!this.state.firstName || !this.state.lastName || !this.state.userName)
   }))
 }
  onLastNameChange = (value)  => {
   this.setState(() => ({
     lastName : value,
     isAddDisabled: (!this.state.firstName || !this.state.lastName || !this.state.userName)
   }))
 }
   onUserNameChange = (value)  => {
   this.setState(() => ({
     userName: value,
     isAddDisabled: (!this.state.firstName || !this.state.lastName || !this.state.userName)
   }))
 }
 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">ReactND - Coding Practice</h1>
       </header>
       <div>
           <div>
             <label>First Name: </label>
             <input type="text" placeholder="Enter firstName" className="first-name"
                   onChange={(event)=> this.onFirstNameChange(event.target.value)}/>
           </div>
           <div>
             <label>Last Name: </label>
             <input type="text" placeholder="Enter lastName" className="last-name"
                    onChange={(event)=> this.onLastNameChange(event.target.value)}/>
           </div>
           <div>
             <label> Username: </label>
             <input type="text" placeholder="Enter username" className="user-name"
                    onChange={(event)=> this.onUserNameChange(event.target.value)}/>
           </div>
            <div>
             <button className="add"
              onClick={this.addUser}
              disabled= {this.state.isAddDisabled}>Add
             </button>
              </div>
       </div>
       <UserList users = {Object.values(this.state.users)}
                toggleUserScore = {this.toggleUserScore}
                incrementUserGameCount = {this.incrementUserGameCount}
        />
     </div>
   );
 }
}
export default App;

