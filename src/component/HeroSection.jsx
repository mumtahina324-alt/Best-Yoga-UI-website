import HeroImg from "./HeroImg";

export default function HeroSection() {
  return (
    <div className="w-full max-auto bg-primary/10">
      <section
        id="home"
        className="
    container mx-auto 
    px-4 sm:px-6 lg:px-10 
    pt-12 pb-10 lg:pt-22 lg:pb-16
    grid grid-cols-1 lg:grid-cols-2 
    gap-4 lg:gap-10 
    items-center
  "
      >
        {/* Left Content */}
        <div className="order-2 lg:order-1 space-y-3 text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl xl:text-4xl font-extrabold font-ProtestStrike text-primary leading-tight">
            BEST YOGA TUTORIALS FOR <br />
            <span className="text-primary">HOME WORKOUTS FITNESS</span>
          </h1>

          <h3 className="text-lg font-bold font-Outfit text-tertiary">
            SESSIONS WORKOUT REGIMEN
          </h3>

          <p className="text-sm text-gray-500 max-w-xl mx-auto lg:mx-0">
            Finding the best yoga tutorials for home workouts can greatly
            enhance your practice and help you achieve your fitness.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start pt-8">
            <button
              className="
              bg-primary text-secondary font-bold text-md
              px-8 py-3 rounded-xl
              hover:bg-primary/10 hover:border border-primary hover:text-primary
              transition-all duration-300
            "
            >
              Start Learning
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2">
          <HeroImg />
        </div>
      </section>
    </div>
  );
}
