import { generarId } from '../helpers/functions'

const MostrarHistorias = ({historias, setHistorias, setMostrarHistoria, setEditarHistoria}) => {

    const handleEliminarHistorias = (historia) => {
        Swal.fire({ // Muestra un mensaje sobre si queremos eliminar al paciente
            title: 'Quieres eliminar esta historia?',
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
      
              const historiasActualizadas = historias.filter( item => item.id !== historia.id ) // Creamos un nuevo arreglo excluyendo el que queremos eliminar
              setHistorias(historiasActualizadas) // Modificamos los pacientes con el arreglo que acabamos de crear
            }
          })  
    }

    const handleActualizarHistorias = (historia) => {
        setMostrarHistoria(true)
        setEditarHistoria(historia)
    }

  return (
    <div className="grid items-center gap-10 mr-10 ml-10 mt-20 w-screen">
        {
            historias.map( (historia) => {
                const {titulo, cuerpo, ideas} = historia
                const cuerpoRecortado = Array.from(cuerpo).filter((item, i) => i < 140 && item).join('')

                return (
                    <div key={generarId()}>
                        <h3 className='font-bold text-2xl idea w-60 mb-2'>{titulo}</h3>
                        <p className='mono text-lg font-bold tracking-normal w-3/4'>{`${cuerpoRecortado}...`}</p>

                        <div className='flex justify-around mt-8 '>
                            <button 
                                className='bg-red-600 p-2 pr-3 pl-3 font-bold text-white rounded-lg hover:bg-red-700 transition-all duration-300'
                                onClick={() => {
                                    handleEliminarHistorias(historia)
                                }}
                            >Eliminar</button>
                            <button 
                                className='bg-sky-500 p-2 pr-3 pl-3 font-bold text-white rounded-lg hover:bg-blue-700 transition-all duration-300'
                                onClick={() => handleActualizarHistorias(historia)}
                            >Actualizar</button>
                        </div>
                    </div>
                )
            } )
        }
    </div>
  )
}

export default MostrarHistorias