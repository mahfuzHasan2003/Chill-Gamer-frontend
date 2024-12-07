import HomeSlider from "../components/HomeSlider";
import NewsLetter from "../components/NewsLetter";
import TopRated from "../components/TopRated";

const Home = () => {
   return (
      <div className='mt-10'>
         <HomeSlider />
         <TopRated />
         <NewsLetter />
      </div>
   );
};

export default Home;
