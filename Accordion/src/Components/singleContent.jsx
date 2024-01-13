import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleContent = ({title, description}) => {
    const [info, setInfo] = useState (false) 
    return (
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setInfo(!info)}>
                    {info ? <FaMinus /> : <FaPlus /> }
                </button>           
            </header>
        {info && <p>{description}</p>}
        </article>
    )
}

export default SingleContent