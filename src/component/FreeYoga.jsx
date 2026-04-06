import yogaImg from "../assets/free-yoga.png";

export default function FreeYoga() {
  return (
    <section className="bg-primary/10 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h4 className="text-xl font-bold mb-2">
              Query <span className="text-emerald-600">Successful</span>
            </h4>

            <h2 className="text-3xl md:text-3xl font-bold leading-tight">
              Take Your First Class{" "}
              <span className="text-emerald-600">For Free</span>
            </h2>

            <p className="text-gray-600 text-sm mt-4 max-w-md">
              Finding the best yoga tutorials for home workouts can greatly
              enhance your practice and help you achieve your fitness goals.
            </p>

            <button className="mt-8 bg-emerald-600 text-white px-8 py-2 rounded-2xl hover:bg-emerald-700 transition duration-300">
              Sign Up For Free
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-lg">
              <img
                src={yogaImg}
                alt="Free Yoga Class"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
