import CommunityPanel from "./CommunityPanel";
import IdentityCard from "./IdentityCard";

const LeftSidebar = () => {
  return (
    <div className='col-span-2  flex flex-col space-y-2 bg'>
      <IdentityCard />
      <CommunityPanel />
    </div>
  );
};
export default LeftSidebar;
