import { useState } from 'react'
import './App.css'
import data from './data'
import SingleContent from './Components/singleContent'


function App() {
  const [accordion, setAccordion] = useState (data)
    return (
      <main>
        <div className='container'>
          <h3>Web Development Tool 2023</h3>
          <section>
            {accordion.map((data)=> {
              return <SingleContent key={data.id} {...data}/>
            })}
          </section>
        </div>
      </main>


  )
}

export default App
