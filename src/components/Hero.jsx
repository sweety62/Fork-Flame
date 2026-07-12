
import {assets} from '../assets/fork-flame-static/assets';
const Hero = () => {
  return (
    <div id="home" className="relative h-screen bg-cover  w-full bg-center " style={{backgroundImage: `url('${assets.heroImg}')`}}>

      <div className='absoluute inset-0 bg-black opacity-50'>

      </div>

      <div className='container mx-auto px-6 h-full flex items-center z-10 relative'>
        <div className='text-white max-w-2xl'>
          <h3 className='text-5xl mb-5 font-bold'>Experience Fine Dining</h3>
          <p className='text-xl mb-8'>Indulge in our exquisite culinary creation crafted with passion and the finest ingredients.</p>
          <a   className="bg-primary hover:bg-red-800 text-white font-bold px-8 py-3 rounded-full cursor-pointer transition duration-300 transform hover:scale-105" href='#reservation'>Book a Table</a>

        </div>

      </div>
      
    </div>
  )
}

export default Hero;
