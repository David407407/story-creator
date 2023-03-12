import { useState } from 'react'
import './App.css'
import CrearHistoria from './components/CrearHistoria'
import Header from './components/Header'
import Historia from './components/Historia'
import MostrarHistorias from './components/MostrarHistorias'

function App() {
  const [mostrarHistoria, setMostrarHistoria] = useState(false)
  const [historias, setHistorias] = useState([])
  const [editarHistoria, setEditarHistoria] = useState({})

  return (
    <div className="text-black overflow-x-hidden">
        <Header/>
        <CrearHistoria
          setMostrarHistoria={setMostrarHistoria}
        />
        {
          historias.length > 0 && 
          <MostrarHistorias
            historias={historias}
            setHistorias={setHistorias}
            setMostrarHistoria={setMostrarHistoria}
            setEditarHistoria={setEditarHistoria}
          />
        }
        {
          mostrarHistoria === true &&
            <Historia
              setMostrarHistoria={setMostrarHistoria}
              historias={historias}
              setHistorias={setHistorias}
              editarHistoria={editarHistoria}
              setEditarHistoria={setEditarHistoria}
            />
        }
    </div>
  )
}

export default App
