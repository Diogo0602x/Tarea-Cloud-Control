import  CloudLogo  from '../assets/illustrations/graphic-boy.svg';

export function ComputingPanel() {
  return (
    <div className='flex justify-center'>
      <div className='absolute mt-6 bg-white rounded-3xl w-[60%] h-[80%]'>
        <div className='justify-center rounded-xl flex w-[89px] h-[89px] bg-primary'>
          <img src={CloudLogo} alt="cloud icon" className='h-[70%] w-[70%] mt-3 object-cover'/>
        </div>
      </div>
    </div>
  )
}