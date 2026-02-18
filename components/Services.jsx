import { motion } from "framer-motion";

export default function Services() {
const services = [
  {
    title: "Photography",
    description:
      "Timeless, detail-focused photography crafted to capture emotion and elegance.",
  },
  {
    title: "Videography",
    description:
      "Cinematic video production designed to tell compelling visual stories.",
  },
  {
    title: "Creative Direction",
    description:
      "Strategic visual planning that ensures cohesive and premium results.",
  },
  {
    title: "Brand Storytelling",
    description:
      "Powerful visual narratives that elevate your brand identity.",
  },
  {
    title: "Studio Sessions",
    description:
      "Professional studio shoots with refined lighting and setup.",
  },
];

  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold mb-12 text-center">Services</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-gray-900 p-8 rounded-2xl border border-white/10"
          >
            <h4 className="text-xl mb-4">{service.title}</h4>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}