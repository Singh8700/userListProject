
import style from "./NewUser.module.css"

const NewUser=(props)=>{


  return (
    <>
    {props.updateUser.length <= 0 ? <div>
      <h2>No Data Here</h2>
    </div>:
    <div className={`container${style.cont}`}>
        <h2>User Lists</h2>
      <ul className={style.ul}>
      {
        props.updateUser.map((item)=>{
          return (
          <li key={item.id}>
          <h4>User Name is : {item.names}</h4>
          <h4>Pincode is : {item.pincodes} </h4><br/>
          <h6>{item.tim}</h6>
            <button type="submit" onClick={()=>props.onUserRemove(item.id)} className={style.btn}> Delete User
            </button>
          </li>
          )
        })
     }
    
      </ul>
      <button type="submit" onClick={props.re} className={style.btn}>Remove All Data </button>
    </div>
    }
    </>
    )
}
export default NewUser