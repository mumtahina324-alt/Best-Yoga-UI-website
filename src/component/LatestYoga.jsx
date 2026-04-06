import { latestYogaData } from "../data/latestYogaData";

export default function LatestYoga() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          {/* Title + Text */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold uppercase">
              Latest <span className="text-emerald-500">News</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl text-sm">
              Finding the best yoga tutorials for home workouts can greatly
              enhance your practice and help you achieve your fitness goals.
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
            <button className="border border-emerald-500 font-semibold text-[10px] text-emerald-500 px-6 py-1 rounded-2xl hover:bg-emerald-500 hover:text-white transition">
              View More
            </button>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {latestYogaData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center sm:w-1/2">
                <span className="inline-block bg-emerald-100 text-primary text-xs px-6 py-1 rounded-lg mb-4 w-fit">
                  {item.category}
                </span>

                <h3 className="font-semibold text-gray-800 text-lg leading-snug">
                  {item.title}
                </h3>

                <p className="text-red-600 text-sm font-semibold mt-3">
                  {item.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
