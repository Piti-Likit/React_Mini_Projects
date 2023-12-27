import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz = () => {
    // console.log(QuestionsData)
    const [current, setCurrent] = useState(0)
    const [select, setSelect] = useState("")
    const {score, setScore} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[select])

const checkAnswer=()=>{
    if (select !== ""){
        if (select === QuestionsData[current].answer){
            setScore(score+1)
        }else{
            console.log ("Incorrect Answer")
        }
    }
}

    return(
    <div className="Quiz">
        <h1>{QuestionsData[current].question}</h1>
        <div className="Choices">
            <button onClick={()=>setSelect("A")}>{QuestionsData[current].A}</button>
            <button onClick={()=>setSelect("B")}>{QuestionsData[current].B}</button>
            <button onClick={()=>setSelect("C")}>{QuestionsData[current].C}</button>
            <button onClick={()=>setSelect("D")}>{QuestionsData[current].D}</button>
        </div>
        <p>{`${current+1} / ${QuestionsData.length}`}</p>
    </div>
    )
}

export default Quiz