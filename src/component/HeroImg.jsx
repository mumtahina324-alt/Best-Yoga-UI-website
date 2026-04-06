import mandala from "../../src/assets/image/maldana.png";
import hero from "../../src/assets/image/yoga-1.png";

export default function HeroImg() {
  return (
    <div className="relative flex justify-center items-center min-h-87.5 sm:min-h-105 lg:min-h-125">
      {/* Spinning Mandala */}
      <img
        src={mandala}
        alt="Alpona"
        className="
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          w-60 sm:w-72 md:w-80 lg:w-120
          animate-spin-slow opacity-90
        "
      />

      {/* Hero Image */}
      <img
        src={hero}
        alt="Yoga"
        className="
          relative z-10
          w-55 sm:w-70 md:w-[320px] lg:w-110
        "
      />
    </div>
  );
}
