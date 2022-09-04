import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image1 from "../assets/images/IMage1.svg";
import Image2 from "../assets/images/IMage2.svg";
import Image3 from "../assets/images/IMage3.svg";
import Image4 from "../assets/images/IMage4.svg";

const AddPosts = () => {
  return (
    <div className='flex flex-col h-fit w-full bg-white rounded-md px-3 pt-3 pb-1 mb-2'>
      <div className='flex items-center space-x-2 mb-1'>
        <UserCircleIcon className='h-12' />
        <input
          type='text'
          placeholder='Commencer un port'
          className='h-12 w-full border-[1px] rounded-full px-4 placeholder:text-sm outline-none hover:bg-[#EEEEEE] transition-colors duration-150 ease-out cursor-pointer'
        />
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center space-x-2 hover:bg-[#EEEEEE] transition duration-200 ease-out py-4 px-1 cursor-pointer'>
          <Image1 className='w-6 h-5 text-blue-500' />
          <p>Photo</p>
        </div>
        <div className='flex items-center space-x-2 hover:bg-[#EEEEEE] transition duration-200 ease-out py-4 px-1 cursor-pointer'>
          <Image2 className='w-6 h-5 text-green-600' />
          <p>Vidéo</p>
        </div>
        <div className='flex items-center space-x-2 hover:bg-[#EEEEEE] transition duration-200 ease-out py-5 px-1 cursor-pointer'>
          <Image3 className='w-6 h-5 text-red-400' />
          <p>Evénement</p>
        </div>
        <div className='flex items-center space-x-2 hover:bg-[#EEEEEE] transition duration-200 ease-out py-4 px-1 cursor-pointer'>
          <Image4 className='w-6 h-5 text-red-500' />
          <p>Rédiger un article</p>
        </div>
      </div>
    </div>
  );
};
export default AddPosts;
