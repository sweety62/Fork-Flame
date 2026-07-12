import { testimonials } from '../assets/fork-flame-static/assets'

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-dark">Customer Reviews</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-700 mt-4">Hear what our guests have to say about Fork & Flame.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-3xl bg-secondary p-6 shadow-lg">
              <p className="text-gray-700 mb-6">“{testimonial.message}”</p>
              <div className="flex items-center gap-4">
                <img className="w-14 h-14 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <p className="text-lg font-semibold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Happy guest</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
