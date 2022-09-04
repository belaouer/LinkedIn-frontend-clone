import HeroContent from "./HeroContent";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Hero = () => {
  return (
    <div className='min-h-[100vh] bg-[#F3F2EF]'>
      <div className='max-w-6xl mx-auto min-h-full py-16'>
        <div className='space-y-4 lg:space-y-0 grid  grid-cols-1 lg:grid-cols-7 xl:grid-cols-10 lg:gap-4 px-4 xl:px-0 '>
          <LeftSidebar />
          <HeroContent />
          <div className='col-span-3 lg:hidden xl:block'>
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
