import { useState } from "react"

const SingleContent = ({title, description}) => {
    const [info, setInfo] = useState (false) 
    return (
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setInfo(!info)}>Info</button>
            </header>
        {info && <p>{description}</p>}
        </article>
    )
}

export default SingleContent