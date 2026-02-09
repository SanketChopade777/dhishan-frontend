import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Success() {
  const [registration, setRegistration] = useState(null);

  useEffect(() => {
    const regData = localStorage.getItem("registration");
    if (regData) {
      setRegistration(JSON.parse(regData));
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!registration) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            No registration found
          </h1>
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 mt-4 inline-block"
          >
            Go to registration page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-center">
            <CheckCircleIcon className="h-20 w-20 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white">
              Registration Successful! 🎉
            </h1>
            <p className="text-green-100 mt-2">
              Your spot for Dhishan'26 is confirmed!
            </p>
          </div>

          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-green-100 text-green-800 font-mono text-lg px-4 py-2 rounded-lg">
                Ticket Number:{" "}
                <span className="font-bold">{registration.ticketNumber}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-600 mb-2">
                  Student Details
                </h3>
                <p>
                  <strong>Name:</strong> {registration.studentName}
                </p>
                <p>
                  <strong>Roll No:</strong> {registration.rollNo}
                </p>
                <p>
                  <strong>Branch:</strong> {registration.branch}
                </p>
                <p>
                  <strong>Year:</strong> {registration.year}
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-600 mb-2">
                  Contact Details
                </h3>
                <p>
                  <strong>Email:</strong> {registration.email}
                </p>
                <p>
                  <strong>Mobile:</strong> +91 {registration.mobile}
                </p>
                <p>
                  <strong>Registered at:</strong>{" "}
                  {new Date(registration.registrationTime).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">
                📍 Event Details
              </h3>
              <p className="text-blue-700">
                <strong>Date:</strong> 15th February, 2026
                <br />
                <strong>Time:</strong> 10:00 AM to 08:00 PM
                <br />
                <strong>Venue:</strong> Open Theatre, GCEK
                <br />
                <strong>Contact:</strong> Kiran Barkade (+91 836 998 5931)
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="text-center space-y-4 print:hidden">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/register"
                  className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition"
                >
                  Back to Registration
                </Link>

                <button
                  onClick={handlePrint}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Print Ticket
                </button>
              </div>

              <p className="text-gray-500 text-sm">
                Please print or save this page for entry
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
