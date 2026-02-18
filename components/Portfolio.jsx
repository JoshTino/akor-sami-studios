import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      src: "images/sami.jpg",
      title: "Akor Samuel",
    },
    {
      id: 2,
      src: "images/wedding.jpg",
      title: "Wedding Photo",
    },
    {
      id: 3,
      src: "images/young-girl.jpg",
      title: "Beautiful Girl",
    },
    {
      id: 4,
      src: "images/man.jpg",
      title: "Happy Man",
    },
    {
      id: 5,
      src: "images/elegant.jpg",
      title: "Elegant Lady",
    },
    {
      id: 6,
      src: "images/duo.jpg",
      title: "Ladies in green",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-semibold mb-12 text-center">
          Portfolio
        </h3>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={`${item.src}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="w-full h-48 md:64 object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white"
              >
                <X size={32} />
              </button>

              <img
                src={`${selectedImage.src}?auto=format&fit=crop&w=1400&q=100`}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}