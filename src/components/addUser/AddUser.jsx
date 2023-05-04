
import {useState, useEffect} from "react";
import style from "./AddUser.module.css";
import NewUser from "../newUser/NewUser";
import Header from "../header/Header"


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
  const [updates ,setUpdates]=useState(false);
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
  

  //user Details upadte method 
const onUpdatehandler=(event)=>{
  event.preventDefault();
 
  props.showAlert("warning","⏫ Update both fields ")

  if(names.length == 0 || names.trim().length == 0){
      return props.showAlert("warning","⚠️Title is Empty ✍️:) ")
    }
  //check not a blank method
  if(userM.length == 0 || userM.trim().length == 0){
      return props.showAlert("warning","⚠️ Massage are not Updated ✍️:) ")
    }
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
  const lists = {
   names,
   userM,
   id:Math.random().toString(),
  dates:dates,
  times:times
 }
 //user object get method 
 //console.log("list is",lists);
 setGetName([...getName,lists])
 props.showAlert("success","🏆 Your current Notes is successful Update 👏")
 setUpdates(false)
 setNames('')
 setUserM('')
 }
 
 //user upadte method
const onUserUpdate=(id)=>{
  setUpdates(true)
  props.showAlert("success","🏆 Now it's Notes Updating time ✍️")
  const filterData = getName.filter((element,index)=>{
    return element.id == id
  })
 console.log("data is ",...filterData)
 const updateName = filterData.map((item)=>{
   return item.names
  })
  const updateMsg = filterData.map((item)=>{
   return item.userM
  })
  //console.log("your mame is",...name)
 setNames(updateName)
  setUserM(updateMsg)
  const datas = getName.filter((element,index)=>{
    return element.id !== id
  })
  //console.log("iid id is",id)
  setGetName(datas)
 props.userList(getName)
 
//user Details send method 
 }

 // console.log("yeh",name.trim())
  const onSubmitHandler=(event)=>{
  // form reload problem solve
    event.preventDefault();
    
    if(names.trim().length === 0 && userM.trim().length === 0){
      return props.showAlert("alert","🙅‍♂️All fields are Mandatory :) ")
    }
    //check name is not a blank
    if(names.trim().length === 0){
      return props.showAlert("warning","⚠️ Title is Empty ✍️ :) ")
    }
    //check Msg in not blank
    if(userM.trim().length == 0){
      return props.showAlert("warning","⚠️ Massage box are Empty  ✍️:) ")
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
  id:Math.random().toString(),
  dates:dates,
  times:times
 }
 //user object get method 
 setGetName([...getName,lists])
//user Details send method 
   props.userList(getName)
//alert method
   props.showAlert("success","🏆 Your Notes is successful creates 👏")
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
  if(getName.length <= 0){
    return props.showAlert("warning", "⚠️ Please first add notes ☣️")
  }
  setGetName([])
  props.showAlert("success","📜 Your all Notes Successfully Deleted")
}

//only one user remove method
const onUserRemove=(id)=>{
 //target user get method 
  const filterData = getName.filter((element, index)=>{
    return element.id !== id
  })
  //target user remove method
  setGetName(filterData)
  props.showAlert("success","Your current 📜 Notes Successfully removed")
}
const resetHandler=(event)=>{
  event.preventDefault();
  if(updates){
  setNames('')
  setUserM('')
  }
  if(names.trim().length === 0 && userM.trim().length === 0){
      return props.showAlert("alert",`🙅‍♂️No need to Reset
     (Because Both fields are empty)`)
    }
  setNames('')
  setUserM('')
}

  return(
    <>
    <div className={`container ${style.addUser}`}>
      <form onSubmit={updates?onUpdatehandler:onSubmitHandler} onReset={resetHandler}>
        <lable htmlFor="name">
         Title
        </lable>
          <input type="text" value={names} id="name" onChange={onNameChange} autoComplete="off"/>
        <lable htmlFor="notes">
          Notes
        </lable>
          <textarea type="number" value={userM} id="pincode" onChange={onPincodeChange} rows="8" cols="30">
          </textarea>
         {/*<div className={style.Btncontainer}>*/}
         <button type="submit" className={`btn btn-primary`}>
          {updates?"Update Notes":"Add Notes"}
         </button>
         <button type="reset" className={`btn btn-primary`}>
          Reset
         </button>
        {/* </div>*/}
      </form>
      <NewUser updateUser={getName} onUserRemove={onUserRemove} onUserUpdate={onUserUpdate} checks={updates}/>
      <Header re={onRenoveHandler}/>
    </div>
    </>
    )
}
export default AddUser