import {useState, useEffect} from 'react'
import Textarea from './Textarea'
import Cerrar from '../img/4.svg'

const CrearIdea = ({setMostrarModal, ideas, setIdeas, editarIdea, setEditarIdea}) => {
    const [tituloIdea, setTituloIdea] = useState('')
    const [estilos, setEstilos] = useState('')
    const [cuerpo, setCuerpo] = useState('')

    useEffect(()=> {
        setEstilos('')
        if(editarIdea.id) {
            const {titulo, cuerpoIdea, id} = editarIdea
            setTituloIdea(titulo)
            setCuerpo(cuerpoIdea)
        }
    }, [] )

    const modificarIdea = () => {
        if(editarIdea.id) {
            setMostrarModal(false)
            if(![tituloIdea, cuerpo].includes('')) {
                const ideaModificada = {
                    titulo : tituloIdea,
                    cuerpoIdea : cuerpo,
                    id : editarIdea.id
                }
                const ideasModificadas = ideas.map((idea) => {
                    if(idea.id === ideaModificada.id) {
                        return ideaModificada
                    } else {
                        return idea
                    }
                })
                setEditarIdea({})
                setIdeas(ideasModificadas)
            }
        } else {
            setMostrarModal(false)
            if(![tituloIdea, cuerpo].includes('')) {
                const idea = {
                    titulo : tituloIdea,
                    cuerpoIdea : cuerpo,
                }
                setIdeas([...ideas, idea])
            }
        }
        
    }

    const handleEliminarIdea = () => {
        Swal.fire({ // Muestra un mensaje sobre si queremos eliminar al paciente
          title: 'Quieres eliminar esta Idea?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#4f46e5',
          cancelButtonColor: '#cb0000',
          confirmButtonText: 'Eliminarla'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminada!',
            )
    
            const ideasActualizadas = ideas.filter( item => item.id !== editarIdea.id ) // Creamos un nuevo arreglo excluyendo el que queremos eliminar
            setIdeas(ideasActualizadas) // Modificamos los pacientes con el arreglo que acabamos de crear
            setEditarIdea({})
            setMostrarModal(false)
          }
        })  
    }

  return (
    <div className="absolute inset-0 bg-negro-92 grid items-center">
        <img 
            src={Cerrar} 
            alt="Icono Cerrar"
            className='w-18 absolute left-90 top-8 cursor-pointer' 
            onClick={() => {
                modificarIdea()
            }}
        />
        <form className="m-auto w-2/3 h-2/4 bg-white p-10 rounded-xl">
            <div className="text-center">
                <input 
                    className="w-2/3 p-4 text-2xl bg-white input_sin_borde font-bold"
                    type="text"
                    id="titulo" 
                    placeholder="Nombre de tu idea..."
                    onChange={(e) => setTituloIdea(e.target.value)}
                    value={tituloIdea}
                />
            </div>

            <div className="text-center mt-5 h-3/4">
                <Textarea
                    estilos={estilos}
                    cuerpo={cuerpo}
                    setCuerpo={setCuerpo}
                />
            </div>

            {
                editarIdea.id &&
                <a 
                    className="text-center btn-efecto-eliminar hover:text-[#fd0061] mt-1 h-14 w-36 font-semibold text-lg cursor-pointer"
                    onClick={ () => handleEliminarIdea()}
                >Eliminar Idea</a>
            }
        </form>

        

    </div>
  )
}

export default CrearIdea