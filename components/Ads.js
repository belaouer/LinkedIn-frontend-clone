import {
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Aws from "../assets/images/aws.jpeg";
import NetApp from "../assets/images/netApp.jpeg";
import Image3 from "../assets/images/Image-3.jpeg";

const Ads = () => {
  return (
    <div className=' flex flex-col h-fit p-4  bg-white rounded-md shadow space-y-2 mb-4 '>
      <div className='flex items-start justify-between'>
        <h1>Sponsorisé</h1>
        <EllipsisHorizontalIcon className='h-6' />
      </div>

      <div className=' flex flex-col space-y-3'>
        <div className='flex items-center space-x-2'>
          <Image src={Aws} width={55} height={55} objectFit='contain' alt='' />
          <div className='flex flex-col'>
            <h1 className='text-sm font-medium'>Certification AWS SAA-CO2</h1>
            <div className='flex justify-between items-center'>
              <p className='text-xs font-light'>
                Profitez de notre partenariat Amazon pour devenir Architecte de
                Solutions
              </p>
              <ChevronRightIcon className='h-10' />
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <Image
            src={NetApp}
            width={55}
            height={55}
            objectFit='contain'
            alt=''
          />
          <div className='flex flex-col'>
            <h1 className='text-sm font-medium'>Azure Migration Checklist</h1>
            <div className='flex justify-between items-center'>
              <p className='text-xs font-light'>
                All you must know before planning your enterprise cloud
                migration strategy
              </p>
              <ChevronRightIcon className='h-10' />
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <Image
            src={Image3}
            width={55}
            height={55}
            objectFit='contain'
            alt=''
          />
          <div className='flex flex-col'>
            <h1 className='text-sm font-medium'>Why Altair SLC?</h1>
            <div className='flex justify-between items-center'>
              <p className='text-xs font-light'>
                Altrair SLC runs programs written in SAS language without any
                translation.
              </p>
              <ChevronRightIcon className='h-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ads;
