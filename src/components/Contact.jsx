const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-dark">Contact Us</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-700 mt-4">Have a question or want to book a private event? We’re here to help.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="rounded-3xl bg-secondary p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Reach Out</h2>
              <p className="text-gray-700 mb-4">Call us, email us, or drop by. Our team is ready to make your dining experience exceptional.</p>
              <div className="space-y-3 text-gray-800">
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> hello@forkflame.com</p>
                <p><strong>Address:</strong> 12 Food Street, City Center, India</p>
              </div>
            </div>
          </div>

          <form className="space-y-5 rounded-3xl bg-secondary p-8 shadow-lg">
            <label className="flex flex-col text-sm font-medium text-dark">
              Name
              <input className="mt-2 rounded-xl border border-gray-200 p-3 text-sm" type="text" placeholder="Your name" />
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Email
              <input className="mt-2 rounded-xl border border-gray-200 p-3 text-sm" type="email" placeholder="you@example.com" />
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Message
              <textarea className="mt-2 min-h-35 rounded-xl border border-gray-200 p-3 text-sm" placeholder="Tell us how we can help" />
            </label>
            <button type="button" className="bg-primary hover:bg-red-800 text-white font-bold rounded-full px-8 py-3 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
