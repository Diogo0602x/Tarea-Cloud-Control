import tareaT from "/assets/tarea-t-sozinho.png";
import { useLocation } from 'react-router-dom';
import  {NavBar}  from './NavBar';

export function Header () {
let location = useLocation()

  return (
    console.log(location.pathname),
    <div className='Header bg-primary h-[7%] w-full p-2 flex justify-between items-center'>
      <a href="http://tarea.com.br" target="_blank" className='flex items-center'>
      <img src={tareaT} alt="Logo Tarea T Sozinho" className='w-[35px] h-[35px] ml-5'/>
      </a>

      {location.pathname !== '/' ?
        <NavBar />: <></>}
    </div>
  )
}