import { Button } from '../components/Button';
import svgIllustration from '../assets/illustrations/graphic-boy.svg'
import tareaDois from '../assets/Negativo/tarea-branca-dois.png'
import {EnvelopeSimple, LockSimple} from 'phosphor-react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom'

export function Login() {

  const navigate = useNavigate();

  return (
    <section className="flex flex-col h-[100%]">
      <div className="w-[70%] sm:w-[300px] justify-between">
        <div className="relative flex items-center mt-[35%] ">
          <div className="absolute bg-primary w-[225px] h-[150px] rounded-full  -left-28 z-0 "/>
          <img src={tareaDois} alt="Logo da Tarea" className='w-[90px] ml-[6px] z-10'/>
          <h1 className='text-3xl sm:text-5xl ml-7 mt-[6%] font-semibold whitespace-nowrap'>Cloud Control</h1>
        </div>

        <div className="hidden lg:absolute bottom-7 left-0 lg:flex justify-center">
          <img src={svgIllustration} alt="Man analysing a chart" className='w-[100%] ml-[150px] mb-[8px]' />
        </div>
      </div>
      <div className="bg-white w-[80%] sm:w-[60%] lg:w-[30%] h-auto rounded-[25px] relative mt-[15%] sm:mt-[30px] md:mt-0 mx-auto lg:ml-[60%] ">
        <h2 className='text-xl text-center mb-5 font-semibold mt-10'>Consulte seu consumo <br/> de serviços <span className='text-secondary'>Tarea Cloud</span></h2>
        <div className='w-full flex flex-col justify-center items-center'>
          <Input 
            Icon={EnvelopeSimple} 
            stylesInput="p-3 focus:outline-none w-[100%] " 
            label="Email" 
            type="email" 
            placeholder="exemplo@gmail.com" 
          />

          <Input 
            Icon={LockSimple} 
            stylesInput="p-3 focus:outline-none w-[100%]"
            colorIcon='black'
            label="Senha" 
            type="password" 
            placeholder="****" 
          />

          <Button text='Login' style='w-[105px] h-[45px] text-2xl p-2 text-black hover:text-white mb-3' onClick={() => navigate('graphics')}/>
            
          <p className='text-sm mt-2 mb-3 '>Esqueceu sua senha? <a href='#' className='text-secondary hover:underline'>Clique aqui</a></p>
        </div>


      </div>
    </section>
  )
}