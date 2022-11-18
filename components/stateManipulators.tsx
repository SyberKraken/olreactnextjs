 
  export function addStringToConst(constItem: string, setconstItem: Function , appedee:string) {
    setconstItem(constItem + " " + appedee)
  }
  export function removeStringFromConst(constItem: string, setconstItem: Function , removee:string) {
    let temp = constItem
    setconstItem(temp.replace(removee, ''))
  }
  
  /**
   * @param manipulatorFunc: function that takes remaining parameters, called in returned function
   * @param constItem: string to be manipulated
   * @param setconstItem: setter for string 
   * @param manipulatee: string to be used by manipulatorfunc
   * @returns function that runs manipulator with given parameters
   */
  export function stateStringManipulatorFactory(manipulatorFunc:Function, constItem: string, setconstItem: Function , manipulatee:string){
    return(
      ()=>{ manipulatorFunc(constItem, setconstItem, manipulatee)}
    )
  }

  /**
   * @param constItem variable used as current value of what wants to be changed
   * @param setconstItem setter for constitem
   * @param manipulatee string to be added or removed from constitem
   * @returns 2 functions, one that adds manipulatee to constitem and one that removes the first instance of manipulatee on constitem.
   */
 export function dualStringManipulatorFactory(constItem: string, setconstItem: Function , manipulatee:string){
    return(
      [
        ()=>addStringToConst(constItem,setconstItem, manipulatee),
        ()=>removeStringFromConst(constItem, setconstItem, manipulatee)
      ]
    )
 }