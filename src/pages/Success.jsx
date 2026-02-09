import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  PrinterIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

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
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Ticket Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:border-2 print:border-gray-300">
          {/* Header with Logo */}
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
            {/* Logo - Top left */}
            <div className="absolute top-4 left-6 hidden print:block">
              <img
                src="/logo.jpg"
                alt="Dhishan Logo"
                className="h-14 w-14 object-cover rounded-lg border-2 border-white"
              />
            </div>

            {/* Web View Logo */}
            <div className="mb-6 print:hidden">
              <img
                src="/logo.jpg"
                alt="Dhishan Logo"
                className="h-28 w-28 mx-auto object-cover rounded-xl border-4 border-white shadow-lg"
              />
            </div>

            <CheckCircleIcon className="h-20 w-20 text-green-300 mx-auto mb-4 print:h-16 print:w-16" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white print:text-3xl">
              Registration Successful! 🎉
            </h1>
            <p className="text-blue-100 mt-2 text-lg">
              Your Official Entry Ticket for Dhishan'26
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Ticket Number - Prominent Display */}
            <div className="text-center mb-10">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-2xl shadow-xl">
                <div className="text-lg font-medium opacity-90">
                  YOUR TICKET NUMBER
                </div>
                <div className="text-5xl font-bold tracking-wider mt-3 print:text-4xl">
                  {registration.ticketNumber}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Present this number at the entry gate along with your college ID
              </p>
            </div>

            {/* Registration Details - Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 print:grid-cols-2 print:gap-6">
              {/* Student Details Card */}
              <div className="border-2 border-blue-100 rounded-xl p-6 bg-gradient-to-br from-blue-50 to-white print:border print:bg-white">
                <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center print:text-xl">
                  <span className="mr-3">👤</span> Student Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="text-xl font-bold text-gray-800 print:text-lg">
                      {registration.studentName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Roll Number</p>
                    <p className="text-xl font-bold text-gray-800 print:text-lg">
                      {registration.rollNo}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Branch</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {registration.branch}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="text-lg font-semibold text-gray-800">
                        {registration.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Details Card */}
              <div className="border-2 border-green-100 rounded-xl p-6 bg-gradient-to-br from-green-50 to-white print:border print:bg-white">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center print:text-xl">
                  <span className="mr-3">📞</span> Contact Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="text-lg font-semibold text-gray-800 break-words">
                      {registration.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <p className="text-2xl font-bold text-gray-800 print:text-xl">
                      +91 {registration.mobile}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Registration Time</p>
                    <p className="text-lg font-semibold text-gray-800">
                      {new Date(registration.registrationTime).toLocaleString(
                        "en-IN",
                        {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="border-2 border-purple-100 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-white mb-10 print:border print:bg-white">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center print:text-xl">
                <span className="mr-3">📅</span> Event Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
                <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-200 shadow-sm">
                  <div className="text-4xl text-purple-600 mb-3 print:text-3xl">
                    📅
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1 print:text-xl">
                    15th Feb 2026
                  </p>
                  <p className="text-gray-600">Saturday</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-200 shadow-sm">
                  <div className="text-4xl text-purple-600 mb-3 print:text-3xl">
                    ⏰
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1 print:text-xl">
                    10:00 AM
                  </p>
                  <p className="text-gray-600">to 08:00 PM</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl border-2 border-purple-200 shadow-sm">
                  <div className="text-4xl text-purple-600 mb-3 print:text-3xl">
                    📍
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-1 print:text-xl">
                    Open Theatre
                  </p>
                  <p className="text-gray-600">GCEK, Karad</p>
                </div>
              </div>
            </div>

            {/* Important Instructions */}
            <div className="border-2 border-red-100 rounded-xl p-6 bg-gradient-to-br from-red-50 to-white mb-10 print:border print:bg-white">
              <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center print:text-xl">
                <span className="mr-3">⚠️</span> Important Instructions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <span className="text-red-600 font-bold text-xl">1</span>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-lg">
                        Carry College ID Card
                      </p>
                      <p className="text-red-700">
                        Mandatory for verification at entry
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <span className="text-red-600 font-bold text-xl">2</span>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-lg">
                        Show This Ticket
                      </p>
                      <p className="text-red-700">
                        Present ticket number at entry gate
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <span className="text-red-600 font-bold text-xl">3</span>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-lg">
                        Free Refreshments
                      </p>
                      <p className="text-red-700">
                        Available for all registered students
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <span className="text-red-600 font-bold text-xl">4</span>
                    </div>
                    <div>
                      <p className="font-bold text-red-800 text-lg">
                        Contact Support
                      </p>
                      <p className="text-red-700">
                        Kiran Barkade (+91 836 998 5931)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Footer */}
            <div className="hidden print:block mt-10 pt-6 border-t-2 border-gray-300">
              <div className="text-center text-gray-600">
                <p className="text-lg font-bold">
                  Official Entry Ticket - Dhishan'26
                </p>
                <p className="mt-2">Government College of Engineering, Karad</p>
                <p className="mt-1 text-sm">
                  Generated on: {new Date().toLocaleDateString("en-IN")} at{" "}
                  {new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>

            {/* Action Buttons - Hidden when printing */}
            <div className="text-center space-y-6 print:hidden">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg"
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 shadow-lg"
                >
                  <PrinterIcon className="h-5 w-5 mr-2" />
                  Print Ticket
                </button>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-purple-800 transition duration-300 shadow-lg"
                >
                  Register Another
                </Link>
              </div>

              <p className="text-gray-500 text-sm">
                💡 Tip: For best printing results, use "Save as PDF" option and
                select "A4" paper size
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Hide all unnecessary elements */
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Show only the ticket */
          .bg-white {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0.75cm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-inside: avoid !important;
          }
          
          /* Remove gradients for print */
          .bg-gradient-to-r {
            background: linear-gradient(to right, #1e40af, #7c3aed) !important;
          }
          
          .from-green-500 {
            background: linear-gradient(to right, #10b981, #059669) !important;
          }
          
          /* Keep borders visible */
          .border-2 {
            border-width: 1px !important;
          }
          
          /* Ensure colors are readable */
          .text-white {
            color: white !important;
          }
          
          /* Adjust font sizes for print */
          .text-5xl { font-size: 2.5rem !important; }
          .text-4xl { font-size: 2rem !important; }
          .text-3xl { font-size: 1.75rem !important; }
          .text-2xl { font-size: 1.5rem !important; }
          .text-xl { font-size: 1.25rem !important; }
          .text-lg { font-size: 1.125rem !important; }
          
          /* Reduce padding for print */
          .p-8 { padding: 1.5rem !important; }
          .p-6 { padding: 1rem !important; }
          
          /* Page setup */
          @page {
            margin: 0.75cm;
            size: A4 portrait;
          }
          
          /* Prevent page breaks inside important sections */
          .grid > div {
            page-break-inside: avoid !important;
          }
          
          /* Hide non-print elements */
          .print\\:hidden {
            display: none !important;
          }
          
          /* Show print-only elements */
          .print\\:block {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
