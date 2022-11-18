import { useState } from "react"
import SurverilenceMenu from "./surveilenceMenu"
import {stateStringManipulatorFactory, addStringToConst, removeStringFromConst} from "./stateManipulators"

export default function FloatingMenu() {
  const [menuClassString, setMenuClassString ] = useState("floatingMenuWrapper")
  const [returnButtonClassString, setreturnButtonClassString ] = useState("returnToMenu belowScreen")
  const [surveilenceMenuWrapperClassString, setsurveilenceMenuWrapperClassString] = useState("survWrapper leftOfScreen")
  const [payloadMenuWrapperClassString, setpayloadMenuWrapperClassString] = useState("payloadWrapper leftOfScreen")
  const [maintinenceMenuWrapperClassString, setmaintinenceMenuWrapperClassString] = useState("maintinenceWrapper leftOfScreen")


  let hidemenu = stateStringManipulatorFactory(addStringToConst, menuClassString, setMenuClassString, "belowScreen")
  let showmenu = stateStringManipulatorFactory(removeStringFromConst, menuClassString, setMenuClassString, "belowScreen")
  let hidereturn = stateStringManipulatorFactory(addStringToConst, returnButtonClassString, setreturnButtonClassString, "belowScreen")
  let showreturn = stateStringManipulatorFactory(removeStringFromConst, returnButtonClassString, setreturnButtonClassString, "belowScreen")
  let hideSurveilence = stateStringManipulatorFactory(addStringToConst, surveilenceMenuWrapperClassString, setsurveilenceMenuWrapperClassString, "leftOfScreen")
  let showSurveilence = stateStringManipulatorFactory(removeStringFromConst, surveilenceMenuWrapperClassString, setsurveilenceMenuWrapperClassString, "leftOfScreen")
  let menuToggle = ()=>{hidemenu();showreturn()}
  
  return (
    <>
    <div className={menuClassString}>
      <button className="circleButton" onClick={()=>{menuToggle(); showSurveilence()}}>a</button>
      <button className="circleButton" onClick={menuToggle}>b</button>
      <button className="circleButton" onClick={menuToggle}>c</button>
    </div>
    <button className={returnButtonClassString} onClick={()=>{
      hidereturn()
      showmenu()
      if(! surveilenceMenuWrapperClassString.includes("leftOfScreen")){
        hideSurveilence()
      }
    }}>return</button>

    <SurverilenceMenu wrapperClasses={ surveilenceMenuWrapperClassString }></SurverilenceMenu>
    </>
  )
}
