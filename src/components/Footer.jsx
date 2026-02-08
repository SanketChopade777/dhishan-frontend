export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2026 Dhishan'26 - Government College of Engineering, Karad. All
          rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Registration limited to GCEK students only. Strict action against
          violators.
        </p>
        <div className="border-t border-gray-800 mt-6 pt-6">
          <p className="text-gray-400">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/sanket-chopade-888546257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition-colors font-medium"
            >
              Sanket Nivas Chopade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
