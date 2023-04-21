
import {useState, useEffect} from "react";
import style from "./AddUser.module.css";
import NewUser from "../newUser/NewUser";

const getUserData = ()=>{
  let list = localStorage.getItem("userDetails")
 // check user data Store in locale storage
  if(list){
    return JSON.parse(localStorage.getItem("userDetails"))
    }
    else{
      return []
    }
}
const AddUser=(props)=>{
  const [names, setNames] = useState('')
  const [userM, setUserM] = useState('')
  const [getName,setGetName]=useState(getUserData())
//user name get function 👇
  const onNameChange=(event)=>{
  //  user name set in useState
    setNames(event.target.value);
    
  }
     // user Msg get function 👇
  const onPincodeChange=(event)=>{
  //  user Msg set in useState
    setUserM(event.target.value);

  }
  
  const onSubmitHandler=(event)=>{
  // form reload problem solve
    event.preventDefault();
    
    if(names.trim().length == 0 && userM.trim().length == 0){
      return props.showAlert("alert","🙅‍♂️ please enter all field :) ")
    }
    //check name is not a blank
    if(names.trim().length == 0){
      return props.showAlert("warning","⚠️ plese write your Name ✍️ :) ")
    }
    //check Msg in not blank
    if(userM.trim().length == 0){
      return props.showAlert("warning","⚠️ please write Your Massage ✍️:) ")
    }
    //date function
const date = new Date();
 const dates = date.toDateString();
    //hours method
    const hh = (date.getHours() < 10 ? '0' : '') +
            date.getHours();
     //minutes method 
    const mm = (date.getMinutes() < 10 ? '0' : '') +
            date.getMinutes();
    // AM & PM method 
    const newformat = hh >= 12 ? 'PM' : 'AM';
  //set seconds method 
    const ss = new Date().getSeconds();
  //time set method 
    const times = `${hh}:${mm}:${ss} ${newformat}`;
    //console.log("time is ", times)
  // user object create method 
   const lists = {
   names,
   userM,
  id:Math.random().toString(),
  dates:dates,
  times:times
 }
 //user object get method 
 setGetName([...getName,lists])
//user Details send method 
   props.userList(getName)
//alert method
   props.showAlert("success","🏆 Your Data is successful Add 👏")
   //after send clear method 
    setNames('')
    setUserM('')
  }
  useEffect(()=>{
    //user data set method in localStorage
   localStorage.setItem("userDetails",JSON.stringify(getName))
 
  },[getName])
  
  //All user remove method 
  const onRenoveHandler=()=>{
  setGetName([])
}
//only one user remove method
const onUserRemove=(id)=>{
 //target user get method 
  const filterData = getName.filter((element, index)=>{
    return element.id !== id
  })
  //target user remove method
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
        <lable htmlFor="notes">
          Notes
        </lable>
          <textarea type="number" value={userM} id="pincode" onChange={onPincodeChange} rows="8" cols="30">
          </textarea>
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