import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-blue-900 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          From Orders to Ownership
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl max-w-xl mx-auto"
        >
          Search homes, analyze BAH, and plan your next PCS with confidence.
        </motion.p>
        <motion.a
          href="#waitlist"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-8 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Join the Mission
        </motion.a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition">
          <div className="text-5xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold mb-2">Home Search</h3>
          <p>Find military-friendly homes near your duty station or next assignment.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition">
          <div className="text-5xl mb-4">💰</div>
          <h3 className="text-xl font-semibold mb-2">BAH Analyzer</h3>
          <p>Calculate affordability based on your BAH and compare buy vs rent options.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border hover:shadow-md transition">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-xl font-semibold mb-2">PCS Checklist</h3>
          <p>Stay organized with a custom timeline, documents, and moving tasks.</p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Be First in Line</h2>
        <p className="mb-6 text-gray-700">Sign up for early access and exclusive resources for your next PCS.</p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your military email"
            className="p-3 w-full sm:w-auto flex-1 rounded border border-gray-300"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition"
          >
            Join Now
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-2">No spam — just solid tools and support.</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 text-center text-sm">
        <div className="mb-4">
          <a href="#" className="mx-2 hover:underline">About</a>|
          <a href="#" className="mx-2 hover:underline">Contact</a>|
          <a href="#" className="mx-2 hover:underline">Terms</a>
        </div>
        <p>© {new Date().getFullYear()} BaseNest. All rights reserved.</p>
      </footer>
    </div>
  );
}
