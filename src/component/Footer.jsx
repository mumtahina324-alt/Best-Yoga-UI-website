import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Classes */}
          <div>
            <h4 className="font-semibold mb-6">Classes</h4>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li className="hover:text-white cursor-pointer">Beginner Yoga</li>
              <li className="hover:text-white cursor-pointer">
                Advanced Poses
              </li>
              <li className="hover:text-white cursor-pointer">
                Meditation Sessions
              </li>
              <li className="hover:text-white cursor-pointer">Home Workouts</li>
              <li className="hover:text-white cursor-pointer">
                Breathing Exercises
              </li>
              <li className="hover:text-white cursor-pointer">Stretching</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li className="hover:text-white cursor-pointer">
                Yoga Tutorials
              </li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Guides</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-6">About</h4>
            <ul className="space-y-3 text-sm text-emerald-100">
              <li className="hover:text-white cursor-pointer">Our Mission</li>
              <li className="hover:text-white cursor-pointer">Trainers</li>
              <li className="hover:text-white cursor-pointer">Testimonials</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-6">Subscribe</h4>

            <div className="flex items-center bg-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
              />
              <button className="bg-gray-200 px-4 py-2 hover:bg-gray-300 transition">
                →
              </button>
            </div>

            <p className="text-emerald-100 text-xs mt-4 leading-relaxed">
              Join YogaFit to enhance your practice and achieve your fitness
              goals with the best yoga tutorials for home workouts.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-500 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="border border-dashed border-emerald-300 px-8 py-4 text-sm">
            Yoga<span className="text-emerald-400">Fit</span>
          </div>

          {/* Bottom Links */}
          <div className="flex gap-8 text-sm text-emerald-100">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-500 transition"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href="#"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-500 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="bg-emerald-500 p-2 rounded-full hover:bg-emerald-500 transition"
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
