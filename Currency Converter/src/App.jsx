import money from './img/money.png'
import CurrencyComponent from './components/CurrencyComponent'

function App() {
  return (
    <div>
      <img src={money} alt='logo'/>
      <h1>Currency Inverter (API)</h1>
        <div className='container'>
          <CurrencyComponent />          
            <div className='equal'> = </div>
          <CurrencyComponent />
        </div>
    </div>
  )
}

export default App
