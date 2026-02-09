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
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Ticket Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 print:shadow-none print:rounded-none print:border-2">
          {/* Header with Logo */}
          <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 text-center">
            {/* Logo */}
            <div className="absolute top-4 left-6 print:block hidden print:left-4">
              <div className="flex items-center">
                <img
                  src="/logo.jpg"
                  alt="Dhishan Logo"
                  className="h-12 w-12 object-cover rounded-lg border-2 border-white"
                />
                <div className="ml-3 text-left">
                  <h2 className="text-white font-bold text-lg leading-tight">
                    DHISHAN
                  </h2>
                  <p className="text-blue-200 text-sm">'26</p>
                </div>
              </div>
            </div>

            <div className="mb-4 print:hidden">
              <img
                src="/logo.jpg"
                alt="Dhishan Logo"
                className="h-24 w-24 mx-auto object-cover rounded-xl border-4 border-white shadow-lg"
              />
            </div>

            <div className="print:pt-6">
              <CheckCircleIcon className="h-16 w-16 text-green-300 mx-auto mb-3 print:h-12 print:w-12" />
              <h1 className="text-3xl sm:text-4xl font-bold text-white print:text-3xl">
                Registration Successful! 🎉
              </h1>
              <p className="text-blue-100 mt-2 text-lg print:text-base">
                Official Entry Ticket Confirmed
              </p>
            </div>
          </div>

          {/* Ticket Content */}
          <div className="p-6 sm:p-8">
            {/* Ticket Number - Highlighted */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-lg print:px-6 print:py-3">
                <div className="text-sm font-medium opacity-90 print:text-xs">
                  TICKET NUMBER
                </div>
                <div className="text-4xl font-bold tracking-wider mt-2 print:text-3xl print:mt-1">
                  {registration.ticketNumber}
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-3 print:text-xs">
                Show this number at entry gate
              </p>
            </div>

            {/* Registration Details in Single Column for Print */}
            <div className="space-y-6 print:space-y-4">
              {/* Student Info Card */}
              <div className="border-2 border-blue-100 rounded-xl p-6 bg-gradient-to-r from-blue-50 to-white print:p-4">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center print:text-lg">
                  <span className="mr-2">👤</span> Student Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500 print:text-xs">
                      Full Name
                    </p>
                    <p className="font-bold text-lg print:text-base">
                      {registration.studentName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 print:text-xs">
                      Roll Number
                    </p>
                    <p className="font-bold text-lg print:text-base">
                      {registration.rollNo}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 print:text-xs">
                      Branch
                    </p>
                    <p className="font-bold text-lg print:text-base">
                      {registration.branch}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 print:text-xs">Year</p>
                    <p className="font-bold text-lg print:text-base">
                      {registration.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="border-2 border-green-100 rounded-xl p-6 bg-gradient-to-r from-green-50 to-white print:p-4">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center print:text-lg">
                  <span className="mr-2">📞</span> Contact Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-500 print:text-xs">
                      Email Address
                    </p>
                    <p className="font-semibold text-gray-800 break-words print:text-sm">
                      {registration.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 print:text-xs">
                      Mobile Number
                    </p>
                    <p className="font-semibold text-gray-800 print:text-base">
                      +91 {registration.mobile}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500 print:text-xs">
                      Registration Time
                    </p>
                    <p className="font-semibold text-gray-800 print:text-sm">
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

              {/* Event Details Card */}
              <div className="border-2 border-purple-100 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-white print:p-4">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center print:text-lg">
                  <span className="mr-2">📅</span> Event Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:grid-cols-3">
                  <div className="text-center p-4 bg-white rounded-lg border border-purple-200 print:p-3">
                    <div className="text-2xl text-purple-600 mb-2 print:text-xl">
                      📅
                    </div>
                    <p className="font-bold text-gray-800">15th Feb 2026</p>
                    <p className="text-sm text-gray-600 print:text-xs">
                      Saturday
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-purple-200 print:p-3">
                    <div className="text-2xl text-purple-600 mb-2 print:text-xl">
                      ⏰
                    </div>
                    <p className="font-bold text-gray-800">10:00 AM</p>
                    <p className="text-sm text-gray-600 print:text-xs">
                      to 08:00 PM
                    </p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-purple-200 print:p-3">
                    <div className="text-2xl text-purple-600 mb-2 print:text-xl">
                      📍
                    </div>
                    <p className="font-bold text-gray-800">Open Theatre</p>
                    <p className="text-sm text-gray-600 print:text-xs">
                      GCEK, Karad
                    </p>
                  </div>
                </div>
              </div>

              {/* Important Instructions */}
              <div className="border-2 border-red-100 rounded-xl p-6 bg-gradient-to-r from-red-50 to-white print:p-4 print:break-inside-avoid">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center print:text-lg">
                  <span className="mr-2">⚠️</span> Important Instructions
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <p className="text-red-700">
                      <strong>Carry College ID Card</strong> - Mandatory for
                      verification
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <p className="text-red-700">
                      <strong>Show This Ticket</strong> - Present at entry gate
                      (Print or Digital)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <p className="text-red-700">
                      <strong>Free Refreshments</strong> - Available for
                      registered students
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-lg mr-3 flex-shrink-0">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <p className="text-red-700">
                      <strong>Contact</strong> - Kiran Barkade (+91 836 998
                      5931)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Watermark */}
            <div className="hidden print:block mt-8 pt-6 border-t border-gray-300">
              <div className="text-center text-gray-500 text-sm">
                <p>Official Entry Ticket - Dhishan'26</p>
                <p className="mt-1">Government College of Engineering, Karad</p>
                <p className="mt-1">
                  Generated on: {new Date().toLocaleDateString("en-IN")}
                </p>
              </div>
            </div>

            {/* Action Buttons - Hidden when printing */}
            <div className="mt-8 text-center space-y-6 print:hidden">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg"
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Back to Home
                </Link>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition duration-300 shadow-lg"
                >
                  <PrinterIcon className="h-5 w-5 mr-2" />
                  Print Ticket
                </button>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-gray-700 hover:to-gray-800 transition duration-300 shadow-lg"
                >
                  Register Another
                </Link>
              </div>

              <p className="text-gray-500 text-sm">
                💡 Tip: For best print results, use "Save as PDF" in print
                dialog
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          /* Hide unnecessary elements */
          .print\\:hidden {
            display: none !important;
          }

          /* Show print-only elements */
          .print\\:block {
            display: block !important;
          }

          /* Prevent page breaks inside important sections */
          .print\\:break-inside-avoid {
            break-inside: avoid !important;
          }

          /* Print styling */
          body {
            background: white !important;
            color: black !important;
            font-size: 12pt !important;
          }

          /* Ensure ticket fits on one page */
          .max-w-4xl {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          /* Remove shadows and backgrounds for printing */
          .shadow-2xl,
          .shadow-lg {
            box-shadow: none !important;
          }

          .bg-gradient-to-r {
            background: #e5e7eb !important;
          }

          /* Keep borders visible */
          .border {
            border-color: #ccc !important;
          }

          /* Reduce padding for print */
          .p-8,
          .p-6 {
            padding: 16px !important;
          }

          .rounded-3xl,
          .rounded-xl,
          .rounded-lg {
            border-radius: 4px !important;
          }

          /* Ensure colors are readable */
          .text-white {
            color: black !important;
          }

          .bg-blue-600 {
            background: #dbeafe !important;
          }

          /* Ticket number stands out */
          .from-green-500 {
            background: #10b981 !important;
            color: white !important;
            border: 2px solid #059669 !important;
          }

          /* Page setup */
          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }
        }
      `}</style>

      {/* Alternative CSS approach */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-ticket, #printable-ticket * {
            visibility: visible;
          }
          #printable-ticket {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
        
        /* Ensure single page print */
        @media print {
          .print-container {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .avoid-break {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
