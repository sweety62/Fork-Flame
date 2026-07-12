
import { FaUtensils, FaWineGlass } from "react-icons/fa6"
import { assets } from "../assets/fork-flame-static/assets"
import { FaWineGlassAlt } from "react-icons/fa"
const About = () => {
  return (
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 ">
          <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-dark">Our Story</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>

        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/*left side image*/}
          <div className="md:w-1/2">
          <img className="w-full h-full object-cover rounded-xl" src={assets.aboutImg} alt="About"/>
          </div>
          {/*right side text*/}
          <div className="md:w-1/2">
          <h3 className="text-3xl font-semibold text-dark mb-8">A Culinary journey</h3>
          <p className="text-gray-700 mb-4">Founded in 2010, Fork & Flame brings together world-class chefs and sommeliners to create an unforgettable  dining experience.our philosophy is simple: exceptional food,impeccable service, and a warm atmosphere.</p>

          <p className="text-gray-700 mb-6">We source our ingredients from local farmers and producers,ensuring the freshest seasonal dishes that celebrate the region's bounty while supporting our community.</p>

          {/*button section */}

          <div className="flex items-center space-x-4">

            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary flex items-center rounded-full justify-center">
                <FaUtensils className="text-white text-xl"/>
              </div>
              <span className=" text-dark font-semibold">Fine Dining</span>

            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary flex items-center rounded-full justify-center">
                <FaWineGlassAlt className="text-white text-xl"/>
              </div>
              <span className=" text-dark font-semibold">Wine pairing</span>

            </div>

            

          </div>
          </div>

        </div>
      </div>
      </div>
    
  )
}

export default About
