const features = [
  { title: "Fast Setup", desc: "Get started in minutes with templates." },
  { title: "Responsive", desc: "Looks great on any screen size." },
  { title: "Scalable", desc: "Built to grow with your users." }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-xl">
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
