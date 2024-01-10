const SingleContent = ({title, description}) => {
    return (
        <article className="content">
            <h4>{title}</h4>
            <button className="btn">Info</button>
        <p>{description}</p>
        </article>
    )
}

export default SingleContent