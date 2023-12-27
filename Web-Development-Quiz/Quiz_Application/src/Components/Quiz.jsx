import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"
import { DataContext } from "../App"

const Quiz = () => {

    const [current, setCurrent] = useState(0)
    const [select, setSelect] = useState("")
    const {score, setScore, setAppState} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[select])

const checkAnswer=()=>{
    if (select !== ""){
        if (select === QuestionsData[current].answer){
            setScore(score+1)
            nextQuestion()
        }else{
            nextQuestion()
        }
    }
}

    const nextQuestion = () => {
        setSelect("")
        if (current === QuestionsData.length-1) {  //current from index 0 to 4
            setAppState("score")
        }else{
            setCurrent(current+1)
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