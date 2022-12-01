import { useState } from "react"
import SurverilenceMenu from "./surveilenceMenu"
import {stateStringManipulatorFactory, addStringToConst, removeStringFromConst, dualStringManipulatorFactory} from "../util/stateManipulators"
import MapWrapper from "./mapwrapper"

export default function FloatingMenu() {
  const [menuClassString, setMenuClassString ] = useState("floatingMenuWrapper")
  const [returnButtonClassString, setreturnButtonClassString ] = useState("returnToMenu belowScreen")
  const [surveilenceMenuWrapperClassString, setsurveilenceMenuWrapperClassString] = useState("survWrapper leftOfScreen")
  const [payloadMenuWrapperClassString, setpayloadMenuWrapperClassString] = useState("payloadWrapper leftOfScreen")
  const [maintinenceMenuWrapperClassString, setmaintinenceMenuWrapperClassString] = useState("maintinenceWrapper leftOfScreen")
  const [confirmationClassString, setconfirmationClassString] = useState("areyoushure hidden")

  let [hidemenu, showmenu] = dualStringManipulatorFactory( menuClassString, setMenuClassString, "belowScreen")
  let [hidereturn, showreturn] = dualStringManipulatorFactory(returnButtonClassString, setreturnButtonClassString, "belowScreen")
  let [hideSurveilence, showSurveilence] = dualStringManipulatorFactory(surveilenceMenuWrapperClassString, setsurveilenceMenuWrapperClassString, "leftOfScreen")
  let [hideSure, showSure] = dualStringManipulatorFactory(confirmationClassString, setconfirmationClassString, "hidden")
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

    <SurverilenceMenu wrapperClasses={ surveilenceMenuWrapperClassString} showConfirmationButton={()=>showSure()}></SurverilenceMenu>  
    <div className={confirmationClassString}>
                <h3>Review order details</h3>
                <button>ok</button>
                <button onClick={()=> hideSure()}>cancel</button>
    </div>
    </>
  )
}
