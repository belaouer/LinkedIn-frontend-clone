import Image from "next/image";
import AIRENC from "../assets/images/AIRENC-Logo.jpeg";
import Banner from "../assets/images/banner.jpeg";
import { HiLightBulb } from "react-icons/hi";
import { RiArrowGoForwardLine, RiSendPlaneFill } from "react-icons/ri";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import {
  GlobeEuropeAfricaIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

const Post = () => {
  return (
    <div className='flex flex-col w-full bg-white rounded-md shadow'>
      <div className='flex justify-between items-start '>
        <div className='flex space-x-3 p-4'>
          <div className='relative w-12 h-12'>
            <Image src={AIRENC} objectFit='contain' layout='fill' alt='' />
          </div>
          <div className='text-xs'>
            <h1 className='text-sm font-medium'>AIRENC</h1>
            <p className='font-light'>555 abonnés</p>
            <p className='flex items-center font-light'>
              1 sem.{" "}
              <GlobeEuropeAfricaIcon className='h-5 ml-2 text-black/[.6]' />
            </p>
          </div>
        </div>
        <EllipsisHorizontalIcon className='h-7 text-black/[.6] mr-3 cursor-pointer' />
      </div>
      <div className='text-sm px-4 pb-8 border-b'>
        <p className='font-light'>Top 3 tips to digitize your supply chain </p>

        <p className='text-right font-medium text-black/[.6] cursor-pointer'>
          ...voir plus
        </p>
      </div>
      <div>
        <div className='flex items-center p-4 space-x-3 '>
          <div className='relative w-10 h-10'>
            <Image src={AIRENC} objectFit='contain' layout='fill' alt='' />
          </div>
          <h1 className='text-sm font-medium'>AIRENC'S Newsletter</h1>
        </div>
        <div className='cursor-pointer'>
          <div className='relative w-full h-36'>
            <Image src={Banner} objectFit='cover' layout='fill' alt='' />
          </div>
          <div className='bg-[#EEF3F8] flex flex-col space-y-2 px-3 py-2'>
            <h1 className='text-sm font-medium text-black/[.9]'>
              Top 3 tips to digitize your supply chain
            </h1>
            <p className='text-xs font-light'>
              AIRENC sur LinkedIn . Lecture de 5 min
            </p>
            <p className='text-xs font-light'>
              🙌 Hello AIRENCers !! Check your six! Here is the 6th newsletter!
              Things are moving fast...
            </p>
          </div>
        </div>
        <div className='mx-4 border-b py-3 flex items-center space-x-2'>
          <div className='flex items-center'>
            <BsFillHandThumbsUpFill className='text-white bg-blue-600 rounded-full -scale-x-100 p-1' />
            <HiLightBulb className='text-white bg-yellow-500 rounded-full -translate-x-1' />
          </div>
          <p className='text-xs font-light'>Vous et 16 autres personnes</p>
        </div>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <BsFillHandThumbsUpFill className='text-blue-600 -scale-x-100 w-6 h-6' />
            <p className='text-blue-600'>J'aime</p>
          </div>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <BiMessageRoundedDetail className=' w-6 h-6' />
            <p>Commenter</p>
          </div>
          <div className='flex items-center space-x-2'>
            <RiArrowGoForwardLine className='w-6 h-6 cursor-pointer' />
            <p>Partager</p>
          </div>
          <div className='flex items-center space-x-2 cursor-pointer'>
            <RiSendPlaneFill className='w-6 h-6' />
            <p>Envoyer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
