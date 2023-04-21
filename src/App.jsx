import { useState, useEffect } from 'react'
import AddUser from "./components/addUser/AddUser";
import Alert from "./components/templates/Alert/Alert";
import NewUser from "./components/newUser/NewUser";
import style from "./Apps.module.css"


function App() {
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
    
  }
  console.log(userList);
  return (
    <div className={style.container}>
    <h1>Notes Manegement</h1>
    <Alert msg={alerts} bg={sta}/>
    <AddUser showAlert={showAlert} userList={data}/>
  
    </div>
  )
}

export default App
