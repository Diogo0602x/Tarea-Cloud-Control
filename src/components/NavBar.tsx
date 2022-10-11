import { useState } from 'react'
import { Link} from 'react-router-dom';
import { List, X } from 'phosphor-react';

export function NavBar(){
const [toggle, setToggle] = useState(false);

const rotas = [
  { id: 0,
    label: 'Serviços',
    to: '/services'},
  { id: 1,
    label: 'Consumo',
    to: '/consumption'},
  { id: 2,
    label: 'Gráficos',
    to: '/graphics'},
  { id: 3,
    label: 'Logout',
    to: '/graphics'},
]

  return (
    <div className='flex text-white md:mr-10 text-[15px] sm:text-[17px]'>
      <ul className={`${toggle == true ? 'flex' : 'hidden'}`}>
        {rotas.map((rota, index) => (
          <li key={index} className={`hover:text-secondary ${index === rotas.length -1 ? 'mr-0' : 'mr-3'}`}>
            <Link to={rota.to} >
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
      { toggle == false ? <List size={30} className='hover:text-secondary cursor-pointer transition duration-150' onClick={()=> setToggle((prev) => !prev)} />
      : <X size={25} className='hover:text-secondary cursor-pointer transition duration-150' onClick={()=> setToggle((prev) => !prev)} />
      }
    </div>
  );
}