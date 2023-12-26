import { useState } from "react"
import QuestionsData from "../data/QuestionsData"

const Quiz = () => {
    // console.log(QuestionsData)
    const [current, setCurrent] = useState(0)
    return(
    <div className="Quiz">
        <h1>{QuestionsData[current].question}</h1>
        <div className="Choices">
            <button>{QuestionsData[current].A}</button>
            <button>{QuestionsData[current].B}</button>
            <button>{QuestionsData[current].C}</button>
            <button>{QuestionsData[current].D}</button>
        </div>
    </div>
    )
}

export default Quiz