import { X } from "lucide-react";

export default function TutorialDetailModel({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/50 backdrop-blur-sm p-4">
      {/* Modal Container: Compact Horizontal Layout */}
      <div className="relative bg-white w-full max-w-4xl min-h-95 md:h-100 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        {/* Left: Image Section */}
        <div className="relative w-full md:w-[45%] h-auto md:h-auto bg-zinc-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/5 to-transparent md:block hidden" />
        </div>

        {/* Right: Content Section */}
        <div className="w-full md:w-[58%] p-8 md:p-10 flex flex-col justify-between">
          {/* Close Icon */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 bg-zinc-50 hover:bg-primary rounded-full transition-all text-zinc-400 hover:text-white border border-zinc-100"
          >
            <X size={20} />
          </button>

          <div className="mt-4 md:mt-0">
            <div className="mb-4">
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-2xl uppercase tracking-widest border border-emerald-100">
                {item.category}
              </span>
            </div>

            <h2 className="text-2xl md:text-2xl font-black text-zinc-800 leading-tight mb-4">
              {item.title}
            </h2>

            <div className="max-h-32 overflow-y-auto pr-2 mb-6">
              <p className="text-sm md:text-sm text-zinc-500">
                "{item.history}"
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex">
            <button
              onClick={onClose}
              className="w-full md:w-auto px-12 py-2 bg-primary hover:bg-emerald-600 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-95"
            >
              Start Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
