import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-semibold tracking-widest">
            AKORSAMI<span className="text-gray-400">STUDIOS</span>
          </h1>

          <div className="hidden md:flex space-x-8 text-sm tracking-wide">
            {["Home", "About", "Portfolio", "Services", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-400 transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-3/4 h-screen bg-white text-black z-50 p-8"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-semibold">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {["Home", "About", "Portfolio", "Services", "Testimonials", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-lg"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}