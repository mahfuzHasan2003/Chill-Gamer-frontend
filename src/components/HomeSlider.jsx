import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import freeFire from "../assets/freefire.webp";
import pubg from "../assets/pubg.jpg";
import clasOfClan from "../assets/clash-of-clans.webp";

const HomeSlider = () => {
   return (
      <Swiper
         className='h-40 md:h-96'
         modules={[Navigation, EffectFade, Autoplay]}
         effect='fade'
         slidesPerView={1}
         autoplay
         navigation
         pagination={{ clickable: true }}>
         <SwiperSlide className='relative'>
            <img src={pubg} alt='Pubg' className='w-full h-full rounded-md' />
            <div className='absolute inset-0 bg-black bg-opacity-60 z-20 hidden md:block rounded-md'></div>
            <div className='absolute z-30 top-10 left-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block'>
               <h3 className='text-lg md:text-2xl font-semibold uppercase'>
                  The Pioneer of Battle Royale
               </h3>
               <p className='text-gray-300 font-light'>
                  PUBG revolutionized the gaming industry with its realistic and
                  tactical battle royale gameplay. With massive maps, dynamic
                  weather, and intense gunfights, PUBG challenges players to
                  strategize, loot, and survive against 100 other players in
                  epic 30-minute matches.
               </p>
            </div>
         </SwiperSlide>
         <SwiperSlide className='relative'>
            <img
               src={freeFire}
               alt='FreeFire'
               className='w-full h-full rounded-md'
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 z-20 hidden md:block rounded-md'></div>
            <div className='absolute z-30 top-10 left-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block'>
               <h3 className='text-lg md:text-2xl font-semibold uppercase'>
                  Fast-Paced Survival Action
               </h3>
               <p className='text-gray-300 font-light'>
                  Free Fire offers quick and intense battle royale matches, with
                  each game lasting about 10 minutes. Players are dropped onto a
                  remote island where they must find weapons, survive against 49
                  other players, and be the last one standing. It's known for
                  its accessibility, even on low-end devices.
               </p>
            </div>
         </SwiperSlide>
         <SwiperSlide className='relative'>
            <img
               src={clasOfClan}
               alt='ClasOfClan'
               className='w-full h-full rounded-md'
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 z-20 hidden md:block rounded-md'></div>
            <div className='absolute z-30 top-10 left-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:block'>
               <h3 className='text-lg md:text-2xl font-semibold uppercase'>
                  Build, Raid, and Dominate
               </h3>
               <p className='text-gray-300 font-light'>
                  Clash of Clans combines strategy, resource management, and
                  multiplayer competition. Players build and upgrade villages,
                  train armies, and raid opponents for resources. Its innovative
                  clan system fosters teamwork and global tournaments for
                  competitive players.
               </p>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default HomeSlider;
