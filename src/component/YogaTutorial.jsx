import { useState } from "react";
import { yogaData } from "../data/yogaData";
import TutorialDetailModel from "./TutorialDetailModel";

export default function YogaTutorial() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-800">
            Latest <span className="text-emerald-500">Yoga</span> Tutorials
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto font-medium">
            Find the best yoga tutorials for home workouts and greatly enhance
            your practice.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {yogaData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-4xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-zinc-100"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <span className="inline-block bg-emerald-500 text-white text-[10px] font-bold px-6 py-1.5 rounded-full mb-4 uppercase tracking-wider shadow-md shadow-emerald-100">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg text-zinc-800 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Component */}
      <TutorialDetailModel
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
