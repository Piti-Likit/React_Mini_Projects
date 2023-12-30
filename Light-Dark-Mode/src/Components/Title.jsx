import { useContext, useState } from 'react'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../App'

const Title = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleSwitch = (checked) => {
        setTheme(checked)
    }
    return(
        <header>
            <span>Mode [{theme}]</span>
            <ReactSwitch onChange={toggleSwitch} checked = {theme} />
        </header>
    )
}

export default Title