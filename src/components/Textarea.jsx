import {useEffect} from 'react'

const Textarea = ({estilos, cuerpo, setCuerpo}) => {
  useEffect(()=> {
    setCuerpo(cuerpo)
  }, [])

  return (
    <textarea 
        name="cuerpo-historia" 
        id="cuerpo-historia"
        placeholder="Escribe tu Historia" 
        className={`${estilos} w-5/6 h-full p-2 m-auto bg-white input_sin_borde rounded-lg scrollbar redimensionar`}  
        value={cuerpo}  
        onChange={(e)=> {
          setCuerpo(e.target.value)
        }}
    ></textarea>
  )
}

export default Textarea