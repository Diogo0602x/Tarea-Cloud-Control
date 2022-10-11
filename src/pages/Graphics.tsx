import ServiceCard from '../components/ServiceCard';
import Line from '../components/Line';
import {ArrowLeft} from 'phosphor-react';
import graphicChart from '../assets/Graphics/graphic-chart.svg';
import graphicChartCost from '../assets/Graphics/graphic-chart-cost.svg';

export function Graphics() {

  return (
    <section className=' flex items-center flex-col h-[100%] '>
      <div className=' bg-white w-[90%] sm:w-[60%] lg:w-[70%] h-auto md:h-auto rounded-[20px] mt-5'>
        <div className='flex justify-between'>
          <div className='flex items-center mt-6 ml-6 sm:w-[400px]'>
            <ServiceCard divStyle={'hidden md:flex'}/>
            <div className='flex flex-col md:ml-10'>
              <h2 className='text-xl sm:text-2xl font-bold whitespace-nowrap'>Cloud computing</h2>
              <Line/>
            </div>
          </div>
          <div className='flex justify-end mt-8  mr-3 md:mr-8 cursor-pointer hover:text-secondary'>
            <ArrowLeft size={35} color='#FEBA12' />     
            <h2 className='text-md sm:text-xl ml-2 mt-1'>Voltar</h2>           
          </div>
        </div>

        <div className='flex flex-col ml-7 mt-5 '>
          <h2 className='text-md md:text-xl'>Consumo mensal a partir do dia 1 de janeiro de 2022 :</h2>
          <img src={graphicChart} alt="cloud icon" className='mt-5 mx-auto'/>
          <img src={graphicChartCost} alt="cloud icon" className='mt-5 mx-auto mb-2'/>
        </div>
      </div>
    </section>
  );
}