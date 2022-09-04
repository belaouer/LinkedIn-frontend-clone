import { PlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";
const CommunityPanel = () => {
  return (
    <div className='hidden sticky top-16 lg:inline-block w-full bg-white rounded-md h-fit shadow '>
      <div className='flex flex-col py-3 lg:border-b'>
        <p className='text-xs font-light mb-2 px-4'>Récent</p>
        <div className='flex items-center space-x-2 text-sm text-black/[.6] font-medium mb-6 hover:bg-[#EEEEEE] transition-colors duration-150 ease-out px-4 py-1 cursor-pointer'>
          <UserGroupIcon className='h-4 text-black/[.6]' />
          <p>Premium Career Group</p>
        </div>
        <div className='mb-6'>
          <h1 className='text-xs text-[#0A66C2] font-medium mb-2 px-4 py-1 cursor-pointer hover:underline'>
            Groupes
          </h1>
          <div className='flex items-center space-x-2 text-sm text-black/[.6] font-medium ease-out px-4 py-1 cursor-pointer hover:bg-[#EEEEEE] '>
            <UserGroupIcon className='h-4 text-black/[.6]' />
            <p>Premium Career Group</p>
          </div>
          <p className='px-10 text-black/[.6] text-xs font-medium ease-out  py-1 cursor-pointer hover:bg-[#EEEEEE] '>
            Tout voir
          </p>
        </div>
        <div className='flex items-center justify-between space-x-2 text-sm text-black/[.6] font-medium mb-2 px-4 py-1 group cursor-pointer'>
          <h1 className='text-xs text-[#0A66C2] font-medium   group-hover:underline'>
            Evénements
          </h1>
          <PlusIcon className='h-4 text-black/[.6]' />
        </div>

        <h1 className='text-xs text-[#0A66C2] font-font-medium cursor-pointer hover:underline px-4 py-1'>
          Hashtags suivis
        </h1>
      </div>
      <div className='flex justify-center py-3 cursor-pointer hover:bg-[#EEEEEE]'>
        <p className='text-sm text-black/[.6] font-medium'>En découvrir plus</p>
      </div>
    </div>
  );
};
export default CommunityPanel;
