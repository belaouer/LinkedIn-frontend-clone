import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import Actualities from "./Actualities";
import Ads from "./Ads";
import Footer from "./Footer";
const RightSidebar = () => {
  return (
    <div className=' col-span-3 md:flex-1 flex flex-col space-y-4'>
      <Actualities />
      <Ads />
    </div>
  );
};
export default RightSidebar;
