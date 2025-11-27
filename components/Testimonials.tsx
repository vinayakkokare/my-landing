const data = [
  { name: "Ana P.", quote: "Helped our team ship 2x faster." },
  { name: "James L.", quote: "Beautiful UI and fast load times." },
  { name: "Priya S.", quote: "Support was exceptional." }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">What customers say</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.map((t) => (
            <blockquote key={t.name} className="p-5 bg-white rounded-lg shadow">
              <p className="text-gray-800">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-gray-500">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
