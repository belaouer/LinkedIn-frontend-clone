import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import LinkedIn from "../assets/images/LinkedInLogo.svg";
const Footer = () => {
  return (
    <div className='flex flex-col space-y-2 pb-4 text-xs font-light'>
      <div className='flex items-center justify-evenly'>
        <p className='cursor-pointer'>Infos</p>
        <p className='cursor-pointer'>Accessibilité</p>
        <p className='cursor-pointer'>Assistance clientèle</p>
      </div>
      <div className='flex items-center justify-center space-x-2 cursor-pointer'>
        <p>Conditions générales et confidentialité</p>
        <ChevronDownIcon className='h-5' />
      </div>
      <div className='flex items-center justify-center space-x-4'>
        <p className='cursor-pointer'>Préférences Pubs</p>
        <p className='cursor-pointer'>Publicité</p>
      </div>
      <div className='flex items-center justify-center space-x-2 cursor-pointer'>
        <p>Solutions professionnelles</p>
        <ChevronDownIcon className='h-5' />
      </div>
      <div className='flex items-center justify-center space-x-4 cursor-pointer'>
        <p>Télechargez l'application LinkedIn</p>
        <p>Plus</p>
      </div>
      <div className='flex items-center justify-center space-x-2 '>
        <LinkedIn className='text-blue-600' />
        <p className=''>LinkedIn Corporation © 2022</p>
      </div>
    </div>
  );
};
export default Footer;
