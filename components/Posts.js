import Post from "./Post";
import { IoMdArrowDropdown } from "react-icons/io";
import RightSidebar from "./RightSidebar";

const Posts = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-2'>
        <div className='border-t-[1px] border-black/[.3] flex-grow mr-1' />
        <p className='text-xs font-light flex items-center  whitespace-nowrap'>
          Classer par:
          <span className='font-medium flex items-center pl-2'>
            Pertinence <IoMdArrowDropdown className='w-4 h-4 cursor-pointer' />
          </span>
        </p>
      </div>
      <div className='flex flex-col space-y-4'>
        <Post />
        <Post />
        <Post />
      </div>

      <div className='hidden md:inline-flex md:w-full  lg:hidden h-fit'>
        <RightSidebar />
      </div>
    </div>
  );
};
export default Posts;
