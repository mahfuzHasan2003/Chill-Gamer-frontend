import { Puff } from "react-loader-spinner";

const Loader = () => {
   return (
      <div className='mt-20 flex justify-center'>
         <Puff
            visible={true}
            height='80'
            width='80'
            color='#4fa94d'
            ariaLabel='puff-loading'
            wrapperStyle={{}}
            wrapperClass=''
         />
      </div>
   );
};

export default Loader;
