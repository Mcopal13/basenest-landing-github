import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-center py-20 bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-800"
      >
        Welcome to BaseNest
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg text-gray-600 max-w-2xl"
      >
        From Orders to Ownership – Find your next duty station home with confidence. Built for Active Duty, Reservists, and Veterans.
      </motion.p>

      <motion.form 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6, duration: 0.6 }}
        action="https://formspree.io/f/YOUR_FORM_ID" 
        method="POST" 
        className="mt-8 flex flex-col gap-4 max-w-md w-full"
      >
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your military email" 
          required 
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800 transition duration-300"
        >
          Join the Waitlist
        </motion.button>
      </motion.form>
    </section>
  );
}
