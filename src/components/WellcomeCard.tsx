import { names } from '../constants';
import govLogo from '/assets/gov-icon.svg'

export function WellcomeCard() { 
  return (
      <div className="absolute text-xl font-semibold text-end  w-[21rem] h-[5.4rem] bg-white z-10 rounded-br-[2rem] drop-shadow-xl mt-[25px] flex flex-wrap -left-[5%]">
        <h2 className="text-secondary ml-20 mt-1">Bem Vindo, <span className="text-black">{names[0].name}.</span></h2>
        <div className='flex items-center my-3'>
          <img className='ml-20 mb-5' src={govLogo} alt="Logo gov.br" />
          <p className='text-gray-300 font-normal text-lg px-2 mb-5'>Workspace</p>
        </div>
      </div>
  )
}   