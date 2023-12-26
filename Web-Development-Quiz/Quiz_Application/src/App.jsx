// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import Menu from './Components/Menu'
import Quiz from './Components/Quiz'
import Score from './Components/Score'

export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState ("menu")
  return (
   <DataContext.Provider value={{appState, setAppState}}>
     <div className='App'>
        <h1>Web Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
     </div>
   </DataContext.Provider>
  )
}

export default App
