import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import Actualities from "./Actualities";
import Ads from "./Ads";
import Footer from "./Footer";
const RightSidebar = () => {
  return (
    <div className=' col-span-3 lg:flex-1  mt-4 sticky -top-[16rem]'>
      <div className='flex flex-col space-y-4 '>
        <Actualities />
        <Ads />
        <Footer />
      </div>
    </div>
  );
};
export default RightSidebar;
