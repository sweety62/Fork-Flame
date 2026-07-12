import { foodMenu } from '../assets/fork-flame-static/assets'

const Menu = () => {
  return (
    <div id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 ">
          <h1 className="text-3xl sm:text-4xl mb-6 font-bold text-dark">Our Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          
          <p className="text-gray-700 mb-8">Crafted with passion and the finest ingredients</p>

        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {
              foodMenu.map((food, index) => (
                <div key={food.id ?? index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <img src={food.image} alt={food.title} className="w-full h-56 object-cover" />
                  <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">{food.title}</h1>
                    <span className="text-primary font-bold">{food.price}</span>
                  </div>
                </div>
              ))
            }

          </div>

        </div>
        </div>
        </div>
  )
}

export default Menu
