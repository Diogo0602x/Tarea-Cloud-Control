import cloudLogo from '/assets/yellow-cloud.svg';
interface ServiceCardItemsProps {
  divStyle?: string;
  service?:  string;
  h2Style?:  string;
  imgStyle?:  string;
}

const ServiceCard = (props: ServiceCardItemsProps) => {
  return (
    <>
      <div className={`flex justify-between rounded-xl w-[85px] h-[80px] bg-primary drop-shadow-2xl ${props.divStyle}`}>
        <img src={cloudLogo} alt="cloud icon" className={`h-[65px] mt-2 mx-auto ${props.imgStyle}`}/>
        <h2 className={`${props.h2Style}`}>{props.service}</h2>
      </div>
    </>
  )
}

export default ServiceCard