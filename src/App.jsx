// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import ListadoPacientes from './Components/ListadoPacientes'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        <Header />
        <div className='mt-12 md:flex'>
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
    </>
  )
}

export default App
