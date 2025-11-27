export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">Have questions? Let’s chat.</p>
        <form className="grid gap-4">
          <input className="p-3 border rounded" placeholder="Name" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded" rows={4} placeholder="How can we help?"></textarea>
          <button className="bg-indigo-600 text-white px-4 py-3 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Pricing</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Starter</h3>
            <p className="mt-4 text-3xl font-bold">Free</p>
            <p className="mt-4 text-sm text-gray-600">Great for experiments and prototypes.</p>
            <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
