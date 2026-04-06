import { X } from "lucide-react";

export default function FeatureDetailModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 backdrop-blur-sm p-4">
      {/* Modal Container: Height komiye min-h-[380px] kora hoyeche */}
      <div className="relative bg-white w-full max-w-4xl min-h-95 rounded-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        {/* Left Side: Image (Perfectly Balanced) */}
        <div className="relative w-full md:w-[40%] h-auto md:h-auto">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Subtle Side Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/5 to-transparent md:block hidden" />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-[58%] p-8 md:p-10 flex flex-col justify-between">
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 bg-zinc-50 hover:bg-primary rounded-full transition-all text-zinc-400 hover:text-white border border-zinc-100"
          >
            <X size={20} />
          </button>

          <div>
            <div className="mb-3">
              <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md uppercase tracking-[1.2px]">
                {item.tag || "Tutorial"}
              </span>
            </div>

            <h2 className="text-2xl md:text-2xl font-black text-zinc-800 leading-tight mb-4">
              {item.title}
            </h2>

            <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar mb-6">
              <p className="text-sm md:text-sm text-zinc-500 leading-relaxed">
                {item.history ||
                  "Start your journey to a healthier lifestyle with our guided breathing exercises designed for modern life."}
              </p>
            </div>
          </div>

          {/* Bottom Action Button */}
          <div className="flex">
            <button
              onClick={onClose}
              className="w-full md:w-auto px-12 py-2 bg-primary hover:bg-emerald-600 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-95"
            >
              Got it! Thanks...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
