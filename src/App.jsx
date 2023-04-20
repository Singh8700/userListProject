import { useState, useEffect } from 'react'
import AddUser from "./components/addUser/AddUser";
import Alert from "./components/templates/Alert/Alert";
import NewUser from "./components/newUser/NewUser";

//import About from "./components/about/About"
/*
const getLocalData=()=>{
  let list = JSON.parse(window.localStorage.getItem("name"))
  console.log("list data is",list,JSON.parse(window.localStorage.getItem("name")))
  if(list){
    return JSON.parse(window.localStorage.getItem("name"))
  }else{
    return [];
  }
  
}*/


function App() {
  //const [count, setCount] = useState(0)
  const [alerts, setAlerts] = useState(null);
  const [sta,setSta]=useState(null);
  const [userList,setUserList]=useState([]);
  
  const showAlert=(sta,msg)=>{
    setSta(sta)
    setAlerts(msg)
    setTimeout(()=>{
      setSta("success")
      setAlerts(null)
    },1500);
  }
  const data=(sname)=>{
    return setUserList([...sname,sname])
    //console.log(userList);
  }
  
  return (
    <>
    <h1>Add User</h1>
    <Alert msg={alerts} bg={sta}/>
    <AddUser showAlert={showAlert} userList={data}/>
  
    </>
  )
}

export default App
