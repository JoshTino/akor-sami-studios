import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Obekpa Ene Becky",
      text: "Akorsami Studios captured our wedding beautifully. Pure excellence.",
    },
    {
      name: "Mr Sheddy",
      text: "Professional, creative and premium delivery. Highly recommended.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      <h3 className="text-3xl font-semibold mb-12 text-center">
        Testimonials
      </h3>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-black border border-white/10 p-8 rounded-2xl"
          >
            <p className="text-gray-400 mb-4">“{t.text}”</p>
            <h4 className="font-medium"><cite>- {t.name} -</cite> </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}