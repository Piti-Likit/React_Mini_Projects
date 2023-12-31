import { useContext, useState } from 'react'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../App'

const Title = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(
            theme === "light" ? "dark" : "light"  //ternary operator
        )
    }
    return(
        <header className={theme==="dark"?"dark":"light"}>
            <span>Mode [{theme}]</span>
            <ReactSwitch onChange={toggleSwitch} checked = {theme==="dark"} />
        </header>
    )
}

export default Title