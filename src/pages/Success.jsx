import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircleIcon,
  PrinterIcon,
  ClipboardIcon,
} from "@heroicons/react/24/solid";

export default function Success() {
  const [registration, setRegistration] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const regData = localStorage.getItem("registration");
    if (regData) {
      setRegistration(JSON.parse(regData));
    }
  }, []);

  const copyToClipboard = () => {
    if (registration?.ticketNumber) {
      navigator.clipboard.writeText(registration.ticketNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const printTicket = () => {
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
    <div className="min-h-[calc(100vh-4rem)] py-8 print:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Print-only header (only shows when printing) */}
        <div className="hidden print:block mb-8">
          <h1 className="text-3xl font-bold text-center">
            DHISHAN 26 - ENTRY TICKET
          </h1>
          <div className="text-center mt-2 text-gray-600">
            Government College of Engineering, Karad
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:border">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-center print:bg-green-600 print:text-black">
            <CheckCircleIcon className="h-20 w-20 text-white mx-auto mb-4 print:text-white" />
            <h1 className="text-3xl font-bold text-white print:text-white">
              Registration Successful! 🎉
            </h1>
            <p className="text-green-100 mt-2 print:text-green-100">
              Your spot for Dhishan'26 is confirmed!
            </p>
          </div>

          <div className="p-8">
            {/* Ticket Number - Big and Bold */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white font-mono text-xl sm:text-2xl px-6 py-4 rounded-xl shadow-lg border-2 border-blue-300">
                <div className="text-sm font-medium opacity-90 mb-1">
                  YOUR TICKET NUMBER
                </div>
                <div className="text-3xl sm:text-4xl font-bold tracking-wider">
                  {registration.ticketNumber}
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-200 transition"
                >
                  <ClipboardIcon className="h-5 w-5 mr-2" />
                  {copied ? "Copied!" : "Copy Ticket No"}
                </button>
                <button
                  onClick={printTicket}
                  className="inline-flex items-center bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded-lg hover:bg-blue-200 transition"
                >
                  <PrinterIcon className="h-5 w-5 mr-2" />
                  Print Ticket
                </button>
              </div>
            </div>

            {/* Registration Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <h3 className="font-bold text-gray-800 text-lg mb-4 border-b pb-2">
                  👤 Student Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-semibold text-lg">
                      {registration.studentName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Roll Number</p>
                    <p className="font-semibold text-lg">
                      {registration.rollNo}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Branch</p>
                      <p className="font-semibold">{registration.branch}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-semibold">{registration.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
                <h3 className="font-bold text-gray-800 text-lg mb-4 border-b pb-2">
                  📞 Contact Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-semibold break-all">
                      {registration.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mobile Number</p>
                    <p className="font-semibold text-lg">
                      +91 {registration.mobile}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Registration Time</p>
                    <p className="font-semibold">
                      {new Date(registration.registrationTime).toLocaleString(
                        "en-IN",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-800 text-lg mb-4">
                📍 Event Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <span className="text-blue-600">📅</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      15th February, 2026
                    </p>
                    <p className="text-sm text-blue-600">
                      10:00 AM to 08:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Open Theatre, GCEK
                    </p>
                    <p className="text-sm text-blue-600">
                      Government College of Engineering, Karad
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Instructions */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-red-800 text-lg mb-4">
                ⚠️ Important Instructions
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <span className="text-red-600 text-sm">1</span>
                  </div>
                  <p className="text-red-700">
                    <strong>Carry your college ID card</strong> for verification
                    at entry gate
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <span className="text-red-600 text-sm">2</span>
                  </div>
                  <p className="text-red-700">
                    <strong>Show this ticket number</strong> (
                    {registration.ticketNumber}) at entry
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <span className="text-red-600 text-sm">3</span>
                  </div>
                  <p className="text-red-700">
                    <strong>Free refreshments</strong> will be provided to all
                    registered students
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-100 p-1 rounded mr-3 mt-1">
                    <span className="text-red-600 text-sm">4</span>
                  </div>
                  <p className="text-red-700">
                    <strong>Contact for help:</strong> Kiran Barkade (+91 836
                    998 5931)
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg"
                >
                  ← Back to Home
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-8 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 shadow-lg"
                >
                  Register Another Student
                </Link>
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-500 text-sm">
                  This ticket is valid for entry to Dhishan'26
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Generated on: {new Date().toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:border {
            border: 2px solid #000 !important;
          }
          .print\\:bg-green-600 {
            background: #059669 !important;
          }
          .print\\:text-white {
            color: white !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          a {
            text-decoration: none !important;
            color: black !important;
          }
          button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
