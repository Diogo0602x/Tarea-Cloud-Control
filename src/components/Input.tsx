import { IconProps } from 'phosphor-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';


interface InputItemProps {
  type: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  colorIcon?: 'black' | string;
  placeholder:  string;
  label: string;
  stylesInput:  string;
}

const Input = ({Icon, label, stylesInput, placeholder, type, colorIcon}: InputItemProps ) => {

  return (
    <>
      {label && <label className="text-black text-lg font-semibold ">{label}</label>}
      <div className="flex mb-11 mt-2 rounded-lg  outline w-[80%] sm:w-[55%] md:w-[70%] items-center">
        <div>
          {Icon && <Icon className="text-black ml-2" size={30} color={colorIcon} />}
        </div>
        
        <input 
          type={type} 
          className={stylesInput}
          placeholder={placeholder}
        />
      </div>
    </>
  )
}
    
export default Input;