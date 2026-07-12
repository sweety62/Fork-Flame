import { useState } from 'react'
import { timeOptions, partySizeOptions, tableRefOptions } from '../assets/fork-flame-static/assets'

const Reservation = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    partySize: '',
    tableRef: '',
    notes: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${form.name}! Your reservation request has been received.`)
    setForm({ name: '', email: '', date: '', time: '', partySize: '', tableRef: '', notes: '' })
  }

  return (
    <section id="reservation" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl mb-4 font-bold text-dark">Book a Table</h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-700 mt-4">Reserve your table for an unforgettable dining experience.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-dark">
              Name
              <input
                className="mt-2 rounded-xl border border-gray-200 p-3 text-sm"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Email
              <input
                className="mt-2 rounded-xl border border-gray-200 p-3 text-sm"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Date
              <input
                className="mt-2 rounded-xl border border-gray-200 p-3 text-sm"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Time
              <select
                className="mt-2 rounded-xl border border-gray-200 p-3 text-sm"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
              >
                {timeOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.value === ''}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Party Size
              <select
                className="mt-2 rounded-xl border border-gray-200 p-3 text-sm"
                name="partySize"
                value={form.partySize}
                onChange={handleChange}
                required
              >
                {partySizeOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.value === ''}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col text-sm font-medium text-dark">
              Preferred Area
              <select
                className="mt-2 rounded-xl border border-gray-200 p-3 text-sm"
                name="tableRef"
                value={form.tableRef}
                onChange={handleChange}
                required
              >
                {tableRefOptions.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.value === ''}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="md:col-span-2 flex flex-col text-sm font-medium text-dark">
              Special Requests
              <textarea
                className="mt-2 min-h-30 rounded-xl border border-gray-200 p-3 text-sm"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Any special requests or dietary preferences"
              />
            </label>
            <button
              type="submit"
              className="md:col-span-2 bg-primary hover:bg-red-800 text-white font-bold rounded-full px-8 py-4 transition"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reservation
