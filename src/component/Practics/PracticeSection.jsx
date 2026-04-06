import practiceImg from "../../assets/p-1.png";
import { practiceItems } from "../../data/practiceItems";
import PracticeAbout from "./PracticeAbout";
import PracticeImg from "./PracticeImg";

export default function PracticeSection() {
  return (
    <section className="bg-[#cfecea] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Practice <span className="text-emerald-600">Where</span> Even You
            <br />
            Want, When Even You Need
          </h2>

          <p className="text-sm text-gray-600 mt-4 max-w-2xl mx-auto">
            Finding the best yoga tutorials for home workouts can greatly
            enhance your practice and help you achieve your fitness.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          <PracticeImg image={practiceImg} />
          <PracticeAbout items={practiceItems} />
        </div>
      </div>
    </section>
  );
}
