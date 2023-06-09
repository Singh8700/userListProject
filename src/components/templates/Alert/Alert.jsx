
import style from "./Alert.module.css"
const Alert=(props)=>{
 
  return(
    <>
    {props.msg && <div
      className={`${props.bg}`}>
      <h4>{props.msg}</h4>
      <div
      className={style.bar}>
      </div>
      </div>
    }
    </>
    )
}
export default Alert