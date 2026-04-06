// ================= UPDATED FeatureYoga.jsx =================

import { useState } from "react";
import { featureYogaData } from "../data/featureYogaData";
import FeatureDetailModal from "./FeatureDetailModal";

export default function FeatureYoga() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="bg-[#f3fbf9] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-600">
              Featured Yoga Videos
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Finding the best yoga tutorials for home workouts can greatly
              enhance your practice and help you achieve your fitness.
            </p>
          </div>

          <button className="hidden md:block px-5 py-1 border border-emerald-500 text-[10px] text-emerald-500 font-semibold rounded-2xl hover:bg-emerald-500 hover:text-white transition">
            View More
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureYogaData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 text-center">
                <span className="inline-block mb-3 px-6 py-2 text-xs font-medium text-white bg-primary rounded-full">
                  {item.tag}
                </span>
                <h4 className="text-sm font-medium text-gray-800 leading-relaxed">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <FeatureDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
