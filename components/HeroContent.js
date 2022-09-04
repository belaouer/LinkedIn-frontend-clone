import AddPosts from "./AddPosts";
import Posts from "./Posts";

const HeroContent = () => {
  return (
    <div className='col-span-5 mt-4'>
      <AddPosts />
      <Posts />
    </div>
  );
};
export default HeroContent;
