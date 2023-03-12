import Icono_Escritura from '../img/2.png'

const Header = () => {
  return (
    <div className="grid justify-center items-center gap-2 mt-5 ">
        <img className='w-28 m-auto' src={Icono_Escritura}/>
        <a className="cursor-pointer text-5xl text-center text-sky-500 font-bold">Story Creator</a>
        <h3 className="efecto-maquina text-2xl text-center mt-2 font-semibold ">El lugar ideal para tu imaginación</h3>
    </div>
  )
}

export default Header