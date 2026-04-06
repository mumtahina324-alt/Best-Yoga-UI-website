import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function NavSection({ onSignUpClick }) {
  const [open, setOpen] = useState(false);

  const menu = ["HOME", "FEATURES", "ABOUT", "TRAINERS", "TESTIMONIALS"];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-primary/10">
      <div className="container mx-auto px-10 h-16 flex items-center">
        {/* Logo (Left) */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-primary">
            Yoga<span className="text-emerald-400">Fit</span>
          </h1>
        </div>

        {/* Desktop Menu (Center) */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-8">
          {menu.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`font-Outfit text-[14px] font-bold transition
                  ${
                    item === "HOME"
                      ? "text-primary border-emerald-600"
                      : "text-tertiary hover:text-emerald-600"
                  }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Button (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end">
          <button
            onClick={onSignUpClick}
            className="bg-primary text-secondary text-[14px] font-Outfit font-bold px-8 py-2 rounded-xl hover:bg-secondary hover:text-primary hover:border border-primary transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-emerald-100">
          <ul className="flex flex-col items-center gap-6 py-6">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`text-[14px] font-bold font-Outfit
                    ${item === "HOME" ? "text-primary" : "text-tertiary"}`}
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}

            <button
              onClick={onSignUpClick}
              className="bg-primary text-secondary text-[14px]
  font-Outfit font-bold px-10 py-2 rounded-xl
  border border-primary
  hover:bg-secondary hover:text-primary hover:scale-105
  transition-all duration-300"
            >
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
