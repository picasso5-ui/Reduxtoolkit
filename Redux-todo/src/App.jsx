import {useSelector,useDispatch} from 'react-redux'
import {addUser,deleteUser,updateusername} from '../src/features/Users'
import {useState} from 'react';

function App() {

const dispatch = useDispatch()
const userList = useSelector((state)=>state.users.value)
const [name,setName ] = useState("")
const [username,setuserName ] = useState("")
const [newUsername,setnewUserName ] = useState("")

  return (
    <div className="App">
      
        <div className="addUser">
          <input 
          type="text" placeholder="Name..." 
          onChange={(e)=>setName(e.target.value)}/>

          <input 
          type="text" placeholder="Username..."
          onChange={(e)=>setuserName(e.target.value)}
          />
          <button onClick={()=>{dispatch(addUser({id:userList[userList.length-1].id+1 ,name,username}))}}>Add User</button>
        </div>
        <div className="displayUsers">
           {userList.map((user)=>{
             return(
               <div>
                 <h2>{user.name}</h2>
                 <h2>{user.username}</h2>
                 <input
                   type="text"
                   placeholder='new username'
                   onChange={(e)=>setnewUserName(e.target.value)}
                   
                 />
                 <button onClick={()=>{dispatch(updateusername({id:user.id,username:newUsername}))}}>update user</button>
                 <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>delete user</button>
               </div>

             ) 
                 
           })}
       
        </div>
    </div>
  )
}

export default App;
