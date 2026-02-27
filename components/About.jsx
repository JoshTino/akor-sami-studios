import { motion } from "framer-motion";

export default function About( {brandname} ) {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold mb-6">About Us</h3>
        <p className="text-gray-400 leading-relaxed">
          {brandname} {/*Studios*/} is a premium creative studio focused on delivering
          timeless visuals. We combine artistic direction with modern
          storytelling to create unforgettable experiences.
        </p>
      </motion.div>
    </section>
  );
}