import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Contact( props) {
  const {brandname} = props;
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h3 className="text-3xl font-semibold mb-6">Contact Us</h3>
      <p className="text-gray-400 mb-8">
        Let’s create something extraordinary together.
      </p>

      <div className="flex justify-center space-x-6 mb-12">
        <a href="#" className="hover:text-gray-400">
          <Facebook />
        </a>
        <a href="#" className="hover:text-gray-400">
          <Instagram />
        </a>
        <a href="#" className="hover:text-gray-400">
          <MessageCircle />
        </a>
      </div>

      {/* CONTACT FORM ADDED (Nothing else changed above) */}
      <div className="max-w-2xl mx-auto mb-16">
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name" required
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com" required
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..." required
              className="w-full bg-black border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {brandname} {/*Studios*/}. Made with ❤️ by
        Dangana Joshua.
      </p>
    </section>
  );
}