import style from "./Header.module.css"
const Header =(props)=>{
  
  return (
    <>
    <div className={`container, ${style.container}`}>
    <div>
    <button type="submit" onClick={props.re} className={style.btn}>Remove All Data </button>
    </div>
    <div>
    <h2 className={`${style.title}`}>Rohit@8700</h2>
    </div>
    </div>
    </>
    )
}
export default Header