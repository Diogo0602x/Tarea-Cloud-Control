import Line from '../components/Line';
import pieChart from '/assets/Pie-chart.svg';
import { WellcomeCard } from '../components/WellcomeCard';
import { comsumptionServices } from '../constants';
import {ArrowDown} from 'phosphor-react';
import ServiceCard from '../components/ServiceCard';


export function Services() {
  return (
    <>
      <div className="flex flex-col bg-white w-[92%] h-auto md:h-[100%] rounded-[25px] ml-[4%] relative ">
      <WellcomeCard />

        <div className='hidden md:flex  justify-end items-end mt-3 mr-2 absolute -right-[0%] '>
          <img src={pieChart} alt="Pie Chart" className='flex w-[100%] h-[100%] '  />
        </div>

        <div className='flex justify-center mt-[140px]'>
          <div>     
            <div className='flex justify-center flex-col items-center '>
              <h2 className='font-semibold text-2xl z-[0] md:mt-0'>Nossos Servicos Cloud:</h2>
              <Line style='w-[280px]' />
            </div>
            <div className='grid  grid-cols-1  md:grid-cols-2 w-full justify-center items-center my-10 '>
              {comsumptionServices.map((services) => (
                <ServiceCard
                  key={services.id} 
                  divStyle={'w-[300px] md:w-[450px] h-[100px] mt-5 mx-7 md:grid-col-1 '}
                  imgStyle={'h-[75%] mt-3 ml-4'}
                  service={services.id}
                  h2Style={'flex mr-auto items-center text-white font-semibold text-2xl ml-14'}
                />
              ))}
            </div>
            <ArrowDown size={60} color='#FEBA12' className='mx-auto cursor-pointer'/>                
          </div>
        </div>
      </div>
    </>
  );
}