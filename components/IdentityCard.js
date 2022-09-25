import { UserCircleIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Me from "../assets/images/Me.JPG";
import Banner from "../assets/images/banner.jpeg";
const IdentityCard = () => {
  return (
    <div className='w-full bg-white rounded-md h-fit shadow '>
      <div className='relative flex flex-col items-center py-4 lg:border-b group cursor-pointer overflow-hidden'>
        <div className='absolute top-0 left-0 right-0 h-14  z-0 '>
          <Image
            src={Banner}
            layout='fill'
            objectFit='contain'
            className='rounded-tl-md rounded-tr-md'
          />
        </div>
        <div className='relative w-[72px] h-[72px] rounded-full overflow-hidden md:w-16 md:h-16 z-20 mb-4'>
          <Image src={Me} layout='fill' objectFit='cover' />
        </div>
        <h1 className=' font-semibold mb-2 group-hover:underline'>
          Mohamed BELAOUER{" "}
        </h1>
        <p className='text-xs text-black/[.6] font-light px-4 text-center'>
          Développeur Full Stack chez AIRENC ⚡️ HEC incubateur @ STATION F ⚡️
        </p>
      </div>
      <div className='flex flex-col  lg:border-b py-3'>
        <div className='flex justify-between items-center px-4 py-1 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'>
          <p className='text-xs text-black/[.6] font-bold'>
            Vues de votre profil
          </p>
          <span className='text-[#0A66C2] text-xs'>21</span>
        </div>
        <div className='flex justify-between items-center px-4 py-1 w-full hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'>
          <p className='text-xs text-black/[.6] font-bold'>
            Impressions de votre post
          </p>
          <span className='text-[#0A66C2] text-xs'>33</span>
        </div>
      </div>
      <div className='flex flex-col p-4 lg:border-b hover:bg-[#EEEEEE] transition-colors duration-150 ease-out'>
        <p className='text-xs text-black/[.6] font-light'>
          Atteignez vos objectifs plus rapidement
        </p>
        <div className='flex items-center space-x-2'>
          <span className='block w-3 h-3 bg-orange-300'></span>
          <p className='text-xs text-black/[.9] font-medium underline'>
            Passer au niveau supérieur
          </p>
        </div>
      </div>
      <div className='flex items-center p-4 space-x-2 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out'>
        <BookmarkIcon className='h-4 w-4 text-black/[.6]' />
        <p className='text-xs text-black/[.9] font-medium'>Mes élements</p>
      </div>
    </div>
  );
};
export default IdentityCard;
