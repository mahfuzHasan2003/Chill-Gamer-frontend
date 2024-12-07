import FAQsPage from "../components/FAQsPage";
import GameCategories from "../components/GameCategories";
import HomeSlider from "../components/HomeSlider";
import NewsLetter from "../components/NewsLetter";
import TopRated from "../components/TopRated";

const Home = () => {
   return (
      <div className='mt-10'>
         <HomeSlider />
         <TopRated />
         <GameCategories />
         <FAQsPage />
         <NewsLetter />
      </div>
   );
};

export default Home;
