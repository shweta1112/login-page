import React from 'react';
import './userList.css';
function UserList(props){
    return(
       <div>
             <ol>
                 {props.users.map((user)=>(
                         <li key={user.userName}>
                            <div className="user-list">
                                <p className="list-name">{user.userName} played                                                                                             {user.showScore ? user.numberOfGame : 'xx'} games</p>
                                <button className="action-button" onClick={()=>props.toggleUserScore(user.userName)}>
                                    {user.showScore? 'Hide Score' : 'Show Score'}
                                 </button>
                                <button className="action-button" onClick={()=>props.incrementUserGameCount(user.userName)}>
                                    Play Game
                                </button>
                            </div>
                         </li>
               ))}
             </ol>
       </div>
   )
}
export default UserList