import { useState } from "react"


interface menuitems{

}

export default function FloatingMenu(props:menuitems) {
  const [menuClassString, setMenuClassString ] = useState("floatingMenuWrapper")
  const [returnButtonClassString, setreturnButtonClassString ] = useState("returnToMenu belowScreen")
  

  function addStringToConst(constItem: string, setconstItem: Function , appedee:string) {
    setconstItem(constItem + " " + appedee)
  }
  function removeStringFromConst(constItem: string, setconstItem: Function , removee:string) {
    let temp = constItem
    setconstItem(temp.replace(removee, ''))
  }
  function stateStringManipulatorFactory(manipulatorFunc:Function, constItem: string, setconstItem: Function , manipulatee:string){
    return(
      ()=>{ manipulatorFunc(constItem, setconstItem, manipulatee)}
    )
  }

  let hidemenu = stateStringManipulatorFactory(addStringToConst, menuClassString, setMenuClassString, "belowScreen")
  let showmenu = stateStringManipulatorFactory(removeStringFromConst, menuClassString, setMenuClassString, "belowScreen")
  let hidereturn = stateStringManipulatorFactory(addStringToConst, returnButtonClassString, setreturnButtonClassString, "belowScreen")
  let showreturn = stateStringManipulatorFactory(removeStringFromConst, returnButtonClassString, setreturnButtonClassString, "belowScreen")
  let menuToggle = ()=>{hidemenu();showreturn()}
  
  return (
    <>
    <div className={menuClassString}>
      <button className="circleButton" onClick={()=>{menuToggle();}}>a</button>
      <button className="circleButton" onClick={menuToggle}>b</button>
      <button className="circleButton" onClick={menuToggle}>c</button>
    </div>
    <button className={returnButtonClassString} onClick={()=>{
      hidereturn()
      showmenu()
    }}>return</button>
    </>
  )
}
