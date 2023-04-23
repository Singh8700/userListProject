
import {useState, useEffect} from "react"
import style from "./NewUser.module.css"

const NewUser=(props)=>{
 const [icon,setIcon] = useState("")
 useEffect(()=>{
   setTimeout(()=>{
     if(props.checks){
    return setIcon(<i class="fa-sharp fa-solid fa-folder-open"></i>)
     }
   }, 100);
   setIcon("")
 },[icon])
  return (
    <>
    {props.updateUser.length <= 0 ? <div>
      {(props.checks && props.updateUser.length <= 0)?
      <h2>UpDating Notes<br/>{icon}
      </h2>
      :
      <h2>Empty Notes Box <br/>{icon}
      
      </h2>
      }
    </div>:
    <div className={`${style.cont}`}>
       {(props.checks)?
       <h2>UpDating Notes <br/>{icon}
      
       </h2>
       :
        <h2>Our Notes <br/> {icon}

        </h2>
       }
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
             My Notes
              <hr/>
          </span>
          </h4>
          <h4 className={style.textarea}>
          <br/>{item.userM} </h4><br/>
          <h6 className={style.date}>
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
    </div>
    }
    </>
    )
}
export default NewUser