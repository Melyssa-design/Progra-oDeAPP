import { useState } from 'react'
import './App.css'
import InfoJogadores from './assets/componente/Info-jogadores'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Bahia</h1>
     <h1>Time do Coração</h1>
     <InfoJogadores />
     

    </>
  )
}

export default App

