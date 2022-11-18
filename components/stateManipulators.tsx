 
  export function addStringToConst(constItem: string, setconstItem: Function , appedee:string) {
    setconstItem(constItem + " " + appedee)
  }
  export function removeStringFromConst(constItem: string, setconstItem: Function , removee:string) {
    let temp = constItem
    setconstItem(temp.replace(removee, ''))
  }
  export function stateStringManipulatorFactory(manipulatorFunc:Function, constItem: string, setconstItem: Function , manipulatee:string){
    return(
      ()=>{ manipulatorFunc(constItem, setconstItem, manipulatee)}
    )
  }

 export function dualStringManipulatorFactory(constItem: string, setconstItem: Function , manipulatee:string){
    return(
      [
        ()=>addStringToConst(constItem,setconstItem, manipulatee),
        ()=>removeStringFromConst(constItem, setconstItem, manipulatee)
      ]
    )
 }