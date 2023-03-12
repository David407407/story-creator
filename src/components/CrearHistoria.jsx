
const CrearHistoria = ({setMostrarHistoria}) => {

  return (
    <div className="grid justify-center mt-5">
        <button 
          className="btn-efecto p-2 pr-4 pl-4 text-center text-xl"
          onClick={()=> setMostrarHistoria(true)}
        >Crear Historia <span className="text-2xl hover:font-bold">+</span></button>
    </div>
  )
}

export default CrearHistoria