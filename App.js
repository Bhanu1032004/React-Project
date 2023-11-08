import React,{useEffect,useState} from 'react'
import UserAuth from './UserAuth';
import { auth } from './firebase';
import Home from './Home'

const App = () => {
  const [presentUser,setPresentUser] = useState(null);
  useEffect(()=>{
    auth.onAuthStateChnaged(user  =>{
      if(user){
      setPresentUser({
        uid:user.uid,
        email:user.email
      })
      }
    else{
      setPresentUser(null);
    }
    })
  },[])
  return (
    <div>
      <center>
        (presentUser ? <Home presentUser={presentUser} /><UserAuth /> )
      </center>
    </div>
  )
}

export default App