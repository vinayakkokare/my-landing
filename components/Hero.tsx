export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="md:flex md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Build faster — launch smarter.
            </h1>
            <p className="mt-4 text-indigo-100 text-lg md:text-xl">
              A concise 1–2 line elevator pitch describing the product/service benefit.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-block bg-white text-indigo-700 px-5 py-3 rounded-lg font-semibold shadow">
                Get Started
              </a>
              <a href="#features" className="inline-block text-white/90 px-4 py-3 rounded-lg border border-white/30">
                See features
              </a>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <div className="bg-white/10 p-6 rounded-2xl shadow-xl">
              <div className="w-full h-48 bg-white/20 rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
