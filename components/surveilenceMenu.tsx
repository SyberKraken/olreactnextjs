import { ChangeEvent, use, useState } from "react"
import { addStringToConst, dualStringManipulatorFactory, stateStringManipulatorFactory } from "./stateManipulators"


interface surveilenceMenuProps{
    wrapperClasses: string
}

interface surveilanceOption{
    title: string
    needsSlider: boolean
}

const optionList: Array<surveilanceOption> =   
    [
        {title:"Popcorn", needsSlider: true},
        {title:"bun", needsSlider:true},
        {title:"singlePoint", needsSlider: false}
    ]


export default function SurverilenceMenu(props: surveilenceMenuProps){
    const [sliderClassString, setSliderClassString] = useState("sliderWrapper hidden")
    const [sliderValue, setSliderValue] = useState("50")
    const [hideSlider, showSlider] = dualStringManipulatorFactory(sliderClassString, setSliderClassString, "hidden" )

    function optionHandler(event: ChangeEvent<HTMLSelectElement>){
       
        optionList.map((option)=>{
            if(option.title == event.target.value){
                if(option.needsSlider){
                    showSlider()
                }else{
                    hideSlider()
                }
            }
        })
    }
    function selectOption(option: surveilanceOption){return <option>{option.title}</option>}

    function sliderChanged(event : ChangeEvent<HTMLInputElement>){
        setSliderValue(event.target.value)
    }


    return(
        <>
        <div className={props.wrapperClasses}>
            <h1>SURVEILENCE</h1>
            <select className="dropDown" onChange={(evt)=> optionHandler(evt)}>
                <option className="hidden">select missiontype</option>
                {optionList.map((text)=>selectOption(text))}
            </select>
            <div className={sliderClassString}>
                <label>{"RADIUS: " + sliderValue}</label>
                <input type={"range"} min='0' max='100' onChange={(evt)=>sliderChanged(evt)}></input>
            </div>
           
        </div>
        
        </>
    )
}