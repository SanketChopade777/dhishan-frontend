import RegistrationForm from "../components/RegistrationForm";

export default function Register() {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Register for <span className="text-yellow-400">DHISHAN'26</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Fill in your details to secure your spot. Only 1500 seats available!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Event Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    📅 Date & Time
                  </h3>
                  <p>15th February, 2026</p>
                  <p>10:00 AM to 08:00 PM</p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">📍 Venue</h3>
                  <p>Open Theatre, GCEK</p>
                  <p className="text-sm mt-1">
                    Government College of Engineering, Karad
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-200 mb-2">
                    🎫 Registration Rules
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>✓ Free for all GCEK students</li>
                    <li>✓ Strictly for GCEK only</li>
                    <li>✓ First-come, first-served</li>
                    <li>✓ Only 1500 seats</li>
                    <li>✓ Free refreshments</li>
                    {/* <li>✓ Schedule on 14th Feb via email</li> */}
                  </ul>
                </div>

                <div className="pt-6 border-t border-blue-400">
                  <h3 className="font-semibold text-blue-200 mb-2">
                    📞 Contact
                  </h3>
                  <p className="text-sm">Kiran Barkade: +91 836 998 5931</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
