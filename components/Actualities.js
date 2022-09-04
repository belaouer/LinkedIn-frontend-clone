import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { HiInformationCircle } from "react-icons/hi";

const Actualities = () => {
  return (
    <div className='flex flex-col h-fit pt-4 px-4 bg-white rounded-md shadow space-y-2'>
      <div className='flex items-start justify-between'>
        <h1>LinkedIn Actualités</h1>
        <HiInformationCircle className='h-6' />
      </div>
      <div className='py-3'>
        <ol className='flex flex-col space-y-2 list-disc'>
          <div className='flex flex-col pl-4 py-1 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'>
            <li className='text-sm font-medium text-black/[.6]'>
              Ces cinq villes où s'installent les prof...
            </li>
            <span className='text-xs font-light'>
              À la une . 17 749 lecteurs
            </span>
          </div>
          <div className='flex flex-col pl-4 py-1 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'>
            <li className='text-sm font-medium text-black/[.6]'>
              Le coup de gueule d'une fille d'agricu...
            </li>
            <span className='text-xs font-light'>il y a 2j . 950 lecteurs</span>
          </div>
          <div className='flex flex-col pl-4 py-1 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'>
            <li className='text-sm font-medium text-black/[.6]'>
              Tous dans le métavers?
            </li>
            <span className='text-xs font-light'>il y a 2j . 300 lecteurs</span>
          </div>
          <div className='flex flex-col pl-4 py-1 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'>
            <li className='text-sm font-medium text-black/[.6]'>
              Ce qui change au 1er septembre
            </li>
            <span className='text-xs font-light'>
              il y a 3j . 5 049 lecteurs
            </span>
          </div>
        </ol>
        <span className='w-fit flex items-center  px-4 py-1 group ease-out hover:bg-[#EEEEEE] transition-colors duration-150 cursor-pointer'>
          Voir plus
          <ChevronDownIcon className='h-5 pl-2' />
        </span>
      </div>
    </div>
  );
};
export default Actualities;
