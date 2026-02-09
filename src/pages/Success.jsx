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
          <h1 className="text-2xl font-bold text-white">
            No registration found
          </h1>
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 mt-3 inline-block text-sm"
          >
            Go to registration page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-6 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Compact Ticket Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden print:shadow-none print:border">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-center relative">
            {/* Logo - Compact */}
            <div className="mb-3">
              <img
                src="/logo.jpg"
                alt="Dhishan Logo"
                className="h-16 w-16 mx-auto object-cover rounded-lg border-2 border-white"
              />
            </div>

            <CheckCircleIcon className="h-12 w-12 text-green-300 mx-auto mb-2" />
            <h1 className="text-xl font-bold text-white">
              Registration Successful
            </h1>
            <p className="text-blue-100 text-sm mt-1">
              Dhishan'26 - Official Entry Ticket
            </p>
          </div>

          {/* Content - Compact Layout */}
          <div className="p-5">
            {/* Ticket Number */}
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3 rounded-lg">
                <div className="text-xs font-medium opacity-90">
                  TICKET NUMBER
                </div>
                <div className="text-2xl font-bold tracking-tight mt-1">
                  {registration.ticketNumber}
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-2">
                Show at entry gate with college ID
              </p>
            </div>

            {/* Details Grid - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Student Info */}
              <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                <h3 className="font-bold text-blue-800 text-sm mb-3 flex items-center">
                  <span className="mr-2">👤</span> Student Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-600 text-xs">Name</p>
                    <p className="font-semibold">{registration.studentName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Roll Number</p>
                    <p className="font-semibold">{registration.rollNo}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-gray-600 text-xs">Branch</p>
                      <p className="font-medium">{registration.branch}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-xs">Year</p>
                      <p className="font-medium">{registration.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border border-green-100 rounded-lg p-4 bg-green-50">
                <h3 className="font-bold text-green-800 text-sm mb-3 flex items-center">
                  <span className="mr-2">📞</span> Contact Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-600 text-xs">Email</p>
                    <p className="font-medium break-words">
                      {registration.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Mobile</p>
                    <p className="font-semibold">+91 {registration.mobile}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Registered</p>
                    <p className="font-medium">
                      {new Date(registration.registrationTime).toLocaleString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details - Compact */}
            <div className="border border-purple-100 rounded-lg p-4 bg-purple-50 mb-6">
              <h3 className="font-bold text-purple-800 text-sm mb-3 flex items-center">
                <span className="mr-2">📅</span> Event Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="text-center p-3 bg-white rounded border border-purple-200">
                  <div className="text-lg text-purple-600 mb-1">📅</div>
                  <p className="font-bold text-gray-800 text-sm">15 Feb 2026</p>
                  <p className="text-gray-600 text-xs">Saturday</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-purple-200">
                  <div className="text-lg text-purple-600 mb-1">⏰</div>
                  <p className="font-bold text-gray-800 text-sm">
                    10 AM - 8 PM
                  </p>
                  <p className="text-gray-600 text-xs">Full Day</p>
                </div>
                <div className="text-center p-3 bg-white rounded border border-purple-200">
                  <div className="text-lg text-purple-600 mb-1">📍</div>
                  <p className="font-bold text-gray-800 text-sm">
                    Open Theatre
                  </p>
                  <p className="text-gray-600 text-xs">GCEK, Karad</p>
                </div>
              </div>
            </div>

            {/* Instructions - Compact */}
            <div className="border border-red-100 rounded-lg p-4 bg-red-50 mb-6">
              <h3 className="font-bold text-red-800 text-sm mb-3 flex items-center">
                <span className="mr-2">⚠️</span> Important Instructions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700">Carry College ID Card</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700">Show ticket at entry</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700">Free refreshments</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span className="text-red-700">
                      Contact: +91 836 998 5931
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Footer */}
            <div className="hidden print:block mt-4 pt-3 border-t border-gray-300">
              <div className="text-center text-gray-500 text-xs">
                <p>Government College of Engineering, Karad</p>
                <p className="mt-1">
                  Generated: {new Date().toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="print:hidden">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-blue-700 transition"
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center bg-green-600 text-white text-sm font-medium py-2.5 px-5 rounded-lg hover:bg-green-700 transition"
                >
                  <PrinterIcon className="h-4 w-4 mr-2" />
                  Print Ticket
                </button>
              </div>
              <p className="text-center text-gray-500 text-xs mt-3">
                Print or save this page for entry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          /* Hide all non-essential elements */
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            font-size: 12px !important;
          }
          
          /* Compact ticket layout */
          .bg-white {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0.5cm !important;
            box-shadow: none !important;
            border: 1px solid #ccc !important;
          }
          
          /* Reduce padding for print */
          .p-5 { padding: 0.8rem !important; }
          .p-4 { padding: 0.6rem !important; }
          .p-3 { padding: 0.4rem !important; }
          
          /* Reduce font sizes for print */
          .text-xl { font-size: 1.1rem !important; }
          .text-2xl { font-size: 1.3rem !important; }
          .text-sm { font-size: 0.8rem !important; }
          .text-xs { font-size: 0.7rem !important; }
          
          /* Remove gradients */
          .bg-gradient-to-r {
            background: #2563eb !important;
          }
          
          .from-green-600 {
            background: #059669 !important;
          }
          
          /* Keep white text readable */
          .text-white {
            color: white !important;
          }
          
          /* Simplify backgrounds */
          .bg-blue-50, .bg-green-50, .bg-purple-50, .bg-red-50 {
            background-color: #f9fafb !important;
          }
          
          /* Page setup */
          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }
          
          /* Hide non-print elements */
          .print\\:hidden {
            display: none !important;
          }
          
          /* Show print-only elements */
          .print\\:block {
            display: block !important;
          }
          
          /* Compact spacing */
          .space-y-2 > * + * {
            margin-top: 0.25rem !important;
          }
          
          .space-y-3 > * + * {
            margin-top: 0.5rem !important;
          }
          
          .mb-6 { margin-bottom: 1rem !important; }
          .mb-4 { margin-bottom: 0.75rem !important; }
          .mt-3 { margin-top: 0.5rem !important; }
          
          /* Ensure everything fits */
          .max-w-3xl {
            max-width: 100% !important;
          }
        }
        
        /* Web-only improvements */
        @media screen {
          .bg-white {
            max-height: calc(100vh - 5rem);
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
}
