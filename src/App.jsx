import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const aumentarContador = () => {
    if(value < 10) {
      setValue(value + 1);
    }
  }

  const diminuirContador = () => {
    if(value > 0) {
      setValue(value - 1);
    }
  }

  const resetar = () => {
    setValue(0);
  }

  return (
    <>
      <main>
        <div className='card'>
        <div className='painel-Numero'>{value}</div>
        <button className='diminuir' onClick={diminuirContador}>-</button>
        <button className='aumentar' onClick={aumentarContador}>+</button>
        <button className='reset' onClick={resetar}>reset</button>
        </div>
      </main>
    </>
  )
}

export default App
