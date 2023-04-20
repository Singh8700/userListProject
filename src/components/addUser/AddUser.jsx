
import {useState, useEffect} from "react";
import style from "./AddUser.module.css";
import NewUser from "../newUser/NewUser";

const getUserData = ()=>{
  let list = localStorage.getItem("userDetails")
 // console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem("userDetails"))
    }
    else{
      return []
    }
}
const AddUser=(props)=>{
  const [names, setNames] = useState('')
  const [pincodes, setPincodes] = useState('')
  const [getName,setGetName]=useState(getUserData())
//  console.log("name list is ",nameList)
 // console.log("yy",localStorage.getItem(names),names)
 
  
 // console.log("hello list ",typeof(getName))
  const onNameChange=(event)=>{
  //  console.log(event.target.value)
    setNames(event.target.value);
    
  }
  
  const onPincodeChange=(event)=>{
   // console.log(event.target.value)
    setPincodes(event.target.value);
    //localStorage.setItem("pincode",pincodes)
  }
  
  const onSubmitHandler=(event)=>{
    //events.perventDefault()
    event.preventDefault();
    
    if(names.trim().length == 0 && pincodes.length == 0){
      return props.showAlert("alert","🙅‍♂️ please enter all field :) ")
    }
    if(names.trim().length == 0){
     // console.log('enter valid name 0leas')
      return props.showAlert("warning","⚠️ plese enter the Name :) ")
    }
    if(pincodes.length <= 5 || pincodes.length >= 7){
      return props.showAlert("warning","⚠️ please enter right pin code :) ")
    }
    const time = new Date().toString();
    console.log("time is ", time)
   const lists = {
   names,
   pincodes,
  id:Math.random().toString(),
  tim:time
 }
 setGetName([...getName,lists])
   // setPincodeGet(b.getItem("pincode"))
   props.userList(getName)
   props.showAlert("success","🏆 Your Data is successful Add")
    setNames('')
    setPincodes('')
  }
  useEffect(()=>{
   localStorage.setItem("userDetails",JSON.stringify(getName))
   
    //localStorage.setItem("pincode", JSON.stringify(pincodes))
  },[getName])
  const onRenoveHandler=()=>{
  setGetName([])
}
const onUserRemove=(id)=>{
 // console.log("id is ",id)
  const filterData = getName.filter((element, index)=>{
    return element.id !== id
  })
  setGetName(filterData)
}
  return(
    <>
    <div className={`container ${style.addUser}`}>
      <form onSubmit={onSubmitHandler}>
        <lable htmlFor="name">
         Name
        </lable>
          <input type="text" value={names} id="name" onChange={onNameChange}/>
        <lable htmlFor="pincode">
          Pincode
        </lable>
          <input type="number" value={pincodes} id="pincode" onChange={onPincodeChange}/>
         <button type="submit" className={`btn btn-primary`}>
          Add User
         </button>
      </form>
      <NewUser updateUser={getName} re={onRenoveHandler} onUserRemove={onUserRemove}/>
    </div>
    </>
    )
}
export default AddUser