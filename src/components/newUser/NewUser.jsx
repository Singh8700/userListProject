
import style from "./NewUser.module.css"

const NewUser=(props)=>{


  return (
    <>
    {props.updateUser.length <= 0 ? <div>
      <h2>No Data Here</h2>
    </div>:
    <div className={`${style.cont}`}>
        <h2>User Lists</h2>
      <ul className={style.ul}>
      {
        props.updateUser.map((item)=>{
          return (
          <>
          <li key={item.id}>
          <h4 className={style.h4}>
          Hi, {item.names}
          </h4>
          <h4>
          <span className={style.span}>
              Notes
              <hr/>
          </span>
          <br/>
          <br/> {item.userM} </h4><br/>
          <h6 className={style.time}>
            {item.dates}
          </h6>
          <h6 className={style.time}>{item.times}</h6>
            <button type="submit" onClick={()=>props.onUserRemove(item.id)} className={style.btn}> Delete User
            </button>
          </li>
          </>
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