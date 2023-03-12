import {useState, useEffect} from 'react'
import Textarea from './Textarea'
import CrearIdea from './CrearIdea'
import Idea from './Idea'
import { generarId } from '../helpers/functions'
import Cerrar from '../img/4.svg'
import Editar from '../img/5.svg'

const Historia = ({setMostrarHistoria, historias, setHistorias, editarHistoria, setEditarHistoria}) => {

    const [estilos, setEstilos] = useState('')
    const [titulo, setTitulo] = useState('')
    const [cuerpo, setCuerpo] = useState('')
    const [ideas, setIdeas] = useState([])
    const [editarIdea, setEditarIdea] = useState({})
    const [mostrarModal, setMostrarModal] = useState(false)

    useEffect(() => {
        setEstilos('col-start-2 col-end-4 ')

        if(editarHistoria.id) {
            setTitulo(editarHistoria.titulo)
            setCuerpo(editarHistoria.cuerpo)
            setIdeas(editarHistoria.ideas)
        }
    }, [] )

    const handleCrearIdea = (e) => {
        e.preventDefault()
        setMostrarModal(true)
    }

    const guardarHistoria = () => {

        if(editarHistoria.id) {
            setMostrarHistoria(false)
            if(![titulo, cuerpo].includes('')) {
                const historiaModificada = {
                    titulo : titulo,
                    cuerpo : cuerpo,
                    ideas : ideas,
                    id : editarHistoria.id
                }
                const historiasModificadas = historias.map((historia) => {
                    if(historia.id === historiaModificada.id) {
                        return historiaModificada
                    } else {
                        return historia
                    }
                })
                setHistorias(historiasModificadas)
                setEditarHistoria({})
            }
        } else {
            setMostrarHistoria(false)
            if(![titulo, cuerpo].includes('')){
                const historia = {
                    titulo,
                    cuerpo,
                    ideas,
                    id : generarId()
                }
                setHistorias([...historias, historia])
            }
        }
        
    }

  return (
    <div className="absolute inset-0 bg-white grid items-center">
        <img 
            src={Cerrar} 
            alt="Icono Cerrar"
            className='w-18 absolute left-90 top-8 cursor-pointer' 
            onClick={() => 
                guardarHistoria()
            }
        />
        <form className="m-auto w-screen h-screen bg-white p-10">
            <div className="text-center">
                <input 
                    className="w-2/3 p-8 text-2xl bg-white input_sin_borde font-bold"
                    type="text"
                    id="titulo" 
                    placeholder="Nombre de tu historia..."
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                />
            </div>

            <div className="text-center mt-5 h-3/4 grid grid-cols-3 gap-5">
                <div>
                    <button
                        className="text-center btn-efecto mt-1 h-14 w-36 font-semibold text-lg"
                        onClick={(e) => handleCrearIdea(e)}
                    >Crear Idea</button>

                    {
                        ideas.map( (idea) => {
                            const {titulo, cuerpoIdea} = idea
                            idea.id = generarId()
                            const cuerpoRecortado = Array.from(cuerpoIdea).filter((item, i) => i < 65 && item).join('')
                            if([titulo, cuerpoIdea].includes('')) return
                            return <Idea key={idea.id}>
                                <h3 className='col-start-1 col-end-4 font-bold text-lg'>{titulo}</h3>
                                <img 
                                    className='m-auto hover:opacity-70 rounded-lg transition-all duration-300 cursor-pointer' 
                                    src={Editar} 
                                    alt="Icono Editar" 
                                    onClick={()=> {
                                        setEditarIdea(idea)
                                        setMostrarModal(true)
                                    }}
                                />
                                <p className='col-start-1 col-end-5 text-gray-700'>{`${cuerpoRecortado}...`}</p>
                            </Idea>
                        } )
                    }
                </div>
                
                <Textarea
                    estilos={estilos}
                    cuerpo={cuerpo}
                    setCuerpo={setCuerpo}
                />
            </div>
            
        </form>

        {
            mostrarModal === true &&
            <CrearIdea
                setMostrarModal={setMostrarModal}
                ideas={ideas}
                setIdeas={setIdeas}
                editarIdea={editarIdea}
                setEditarIdea={setEditarIdea}
            />
        }
    </div>
  )
}

export default Historia