import { useState, ChangeEvent } from 'react'
import ServiceCard from '../components/ServiceCard';
import Line from '../components/Line';
import { Button } from '../components/Button';
import DatePicker from 'sassy-datepicker';
import { companies } from '../constants';
import {ArrowLeft} from 'phosphor-react';

export function Consumption() {
  const [company, setCompany] = useState('');
  
  const onChange = (date: Date) => {
    console.log(date.toString());
  };

  function handleChange(event: ChangeEvent<HTMLSelectElement>): void {
    setCompany(event.currentTarget.value);
  }

  return (
    <section className='relative flex items-center flex-col h-[100%]'>
      <div className='absolute bg-white w-[90%] sm:w-[60%] lg:w-[70%] h-auto rounded-[20px] mt-5'>
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
        

        <div className='border-double border-4 border-black h-[80%] md:h-[70%] mx-3 my-5'>
          <div className='flex flex-col ml-[3%]'>
            <div className='flex mt-[3%] flex-col '>
              <h2 className='text-md md:text-xl font-semibold'>Por favor selecione o intervalo de tempo de consumo:</h2>
              <DatePicker onChange={onChange} className='ml-[7%] mt-3 lg:mt-0 md:place-self-end md:mr-[10%]' />
            </div>
            <div className='flex  mt-[3%] flex-col md:justify-evenly'>
              <h2 className='text-md md:text-xl font-semibold'>Por favor selecione a empresa a ser consultada:</h2>
              <div className="ml-[7%] mt-3 lg:mt-0 mb-5 md:place-self-end md:mr-[10%]">
                <select value={company} onChange={handleChange} className='bg-white outline outline-offset-2 outline-2 rounded-md w-[255px]'>
                  {companies.map((company) => (
                    <option key={company.id} value={company.id}>{company.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center mb-5'>
          <Button link='#' text='Buscar' style='w-[150px] h-[50px] text-2xl p-2 text-black hover:text-white '/>
        </div>

      </div>
    </section>
  );
}