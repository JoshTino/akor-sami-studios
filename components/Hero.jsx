import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-semibold mb-6"
      >
        Crafting Visual Stories That Inspire
      </motion.h2>
      <p className="max-w-xl text-gray-400 mb-8">
        Premium photography and creative production tailored for brands,
        couples and visionary individuals.
      </p>
      <a href="#portfolio" className="px-8 py-3 bg-white my-3 text-black rounded-full hover:bg-gray-200 transition">
        View Portfolio
      </a>
      <a href="#contact" className="px-8 py-3 bg-black text-white my-3 text-black rounded-full hover:bg-yellow-700 transition">
        Book now
      </a>
    </section>
  );
}