import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1691801690578-f9cad8dafbdd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Afro Lady",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1739526169655-0378b9aae5ab?q=80&w=1095&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Wedding Photo",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1589199051916-92cd36b97ffa?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cultural Attire",
    },
    {
      id: 4,
      src: "https://plus.unsplash.com/premium_photo-1769339044519-facdb4425b63?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Blue Head Wrap",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1765005343987-6bf51ae692c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Graduation",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1649967322800-5f215ed89863?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Melanin Lady",
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