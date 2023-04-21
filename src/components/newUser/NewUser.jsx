
import style from "./NewUser.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NewUser=(props)=>{


  return (
    <>
    {props.updateUser.length <= 0 ? <div>
      <h2>Empty Notes Box</h2>
    </div>:
    <div className={`${style.cont}`}>
        <h2>Notes</h2>
      <ul className={style.ul}>
      {
        props.updateUser.map((item)=>{
          return (
          <>
          <li key={item.id}>
          <h4 className={style.h4}>
          {item.names}
          </h4>
          <h4>
          <span className={style.span}>
              Notes
              <hr/>
          </span>
          <br/> {item.userM} </h4><br/>
          <h6 className={style.time}>
            {item.dates}
          </h6>
          <h6 className={style.time}>{item.times}</h6>
      <span className={style.btn}>
       <span onClick={()=>props.onUserUpdate(item.id)}>
      <i className="fas fa-edit fa-lg"></i>
        </span>
        <span onClick={()=>props.onUserRemove(item.id)} >
       <i className="fa-solid fa-trash fa-lg">
          </i>
          </span>
        </span>
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