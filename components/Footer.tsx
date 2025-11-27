export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} YourProduct — All rights reserved.</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-sm">Terms</a>
          <a href="#" className="text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
