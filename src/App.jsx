import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage, getAdminLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {


  
  const [user, setUser] = useState(null)
  const [LoggedTypeUser, setLoggedTypeUser] = useState(null)
  //Here we are getting the Data of the employee and admin which is avaiable locally in local storage
  const [UserData, setUserData]=useContext(AuthContext);
  
  useEffect(() => {
    
    const loggedInUser=localStorage.getItem('LoggedInUser')

    if(loggedInUser){
      const UserInfo=JSON.parse(loggedInUser)

      setUser(UserInfo.role);
      setLoggedTypeUser(UserInfo.data);
    }
  
  }, [])
  

   const LoginHandler = (email,password)=>{
      if(email=='admin@me.com' && password=='123'){


        localStorage.setItem("LoggedInUser",JSON.stringify({role:"admin",data:{email:"admin@me.com",password:"123",}}))
        const Admin=getAdminLocalStorage();
        setUser("admin")
        setLoggedTypeUser(Admin)

      }else if(UserData ){
        const WhoUser=UserData.find((e)=> e.email==email && e.password==password)
        if(WhoUser){
          

          setUser("employee")
          setLoggedTypeUser(WhoUser)  
          localStorage.setItem("LoggedInUser",JSON.stringify({role:"employee",data:WhoUser}))
        }      
        else{
          alert("Invaild credentails")
        }         
      }
      else{
          alert("Invaild credentails")
      }
  }



  return (
    <div className='bg-[#1C1C1C]'>

      {!user ? <Login LoginHandler={LoginHandler}/> : ''}
      {user =='admin' ? <AdminDashBoard changeUser={setUser} userData={LoggedTypeUser} />: (user == 'employee' ? <EmployeeDashBoard changeUser={setUser} userData={LoggedTypeUser}/> : null)}
      {/* <Login/> */}
      {/* <EmployeeDashBoard userData={LoggedTypeUser} /> */}
      {/* <AdminDashBoard/> */}
    </div>

  )
}

export default App