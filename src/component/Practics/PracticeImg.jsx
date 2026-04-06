export default function PracticeImg({ image }) {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 rounded-3xl shadow-md max-w-md">
        <img
          src={image}
          alt="Practice Yoga"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
