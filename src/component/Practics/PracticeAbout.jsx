export default function PracticeAbout({ items }) {
  return (
    <div className="m-8 space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-xl p-5 shadow-sm">
          <h4 className="text-md font-bold text-emerald-600">{item.title}</h4>
          <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
