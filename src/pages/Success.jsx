import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleIcon, PrinterIcon, HomeIcon } from "@heroicons/react/24/solid";

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
    <div className="min-h-[calc(100vh-4rem)] py-4 bg-gray-50">
      {/* COMPACT TICKET DESIGN - FITS ON ONE PAGE */}
      <div className="max-w-3xl mx-auto px-3 sm:px-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 print:shadow-none print:border print:rounded-none">
          
          {/* HEADER - COMPACT */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 sm:p-5 text-center relative print:bg-blue-800 print:text-black">
            {/* Logo - Small and positioned left */}
            <div className="absolute left-3 top-3 flex items-center print:block">
              <img 
                src="/logo.jpg" 
                alt="Dhishan Logo" 
                className="h-10 w-10 object-cover rounded-md border border-white print:h-8 print:w-8"
              />
            </div>
            
            <CheckCircleIcon className="h-10 w-10 text-green-300 mx-auto mb-2 print:h-8 print:w-8" />
            <h1 className="text-xl sm:text-2xl font-bold text-white print:text-white">
              Registration Successful
            </h1>
            <p className="text-blue-100 text-sm mt-1 print:text-blue-100">
              Official Entry Ticket - Dhishan'26
            </p>
          </div>

          {/* CONTENT - COMPACT LAYOUT */}
          <div className="p-4 sm:p-5 space-y-4 print:p-4">
            
            {/* TICKET NUMBER - PROMINENT */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3 rounded-lg shadow print:px-4 print:py-2">
                <div className="text-xs font-medium opacity-90 print:text-xs">TICKET NO</div>
                <div className="text-2xl font-bold tracking-tight mt-1 print:text-xl">
                  {registration.ticketNumber}
                </div>
              </div>
            </div>

            {/* COMPACT DETAILS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:grid-cols-2 print:gap-2">
              {/* STUDENT INFO */}
              <div className="border border-blue-100 rounded-lg p-3 bg-blue-50 print:p-2">
                <h3 className="font-bold text-blue-800 text-sm mb-2 flex items-center print:text-xs">
                  <span className="mr-1">👤</span> Student Details
                </h3>
                <div className="space-y-1 text-sm print:text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-semibold">{registration.studentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Roll No:</span>
                    <span className="font-semibold">{registration.rollNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Branch:</span>
                    <span className="font-semibold">{registration.branch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year:</span>
                    <span className="font-semibold">{registration.year}</span>
                  </div>
                </div>
              </div>

              {/* CONTACT INFO */}
              <div className="border border-green-100 rounded-lg p-3 bg-green-50 print:p-2">
                <h3 className="font-bold text-green-800 text-sm mb-2 flex items-center print:text-xs">
                  <span className="mr-1">📞</span> Contact Details
                </h3>
                <div className="space-y-1 text-sm print:text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-semibold truncate">{registration.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mobile:</span>
                    <span className="font-semibold">+91 {registration.mobile}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registered:</span>
                    <span className="font-semibold text-xs">
                      {new Date(registration.registrationTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* EVENT DETAILS - COMPACT */}
            <div className="border border-purple-100 rounded-lg p-3 bg-purple-50 print:p-2">
              <h3 className="font-bold text-purple-800 text-sm mb-2 flex items-center print:text-xs">
                <span className="mr-1">📅</span> Event Information
              </h3>
              <div className="grid grid-cols-3 gap-2 print:grid-cols-3 print:gap-1">
                <div className="text-center p-2 bg-white rounded border border-purple-200 print:p-1">
                  <div className="text-lg text-purple-600 mb-1 print:text-base">📅</div>
                  <p className="font-bold text-gray-800 text-xs print:text-xs">15 Feb 2026</p>
                </div>
                <div className="text-center p-2 bg-white rounded border border-purple-200 print:p-1">
                  <div className="text-lg text-purple-600 mb-1 print:text-base">⏰</div>
                  <p className="font-bold text-gray-800 text-xs print:text-xs">10AM-8PM</p>
                </div>
                <div className="text-center p-2 bg-white rounded border border-purple-200 print:p-1">
                  <div className="text-lg text-purple-600 mb-1 print:text-base">📍</div>
                  <p className="font-bold text-gray-800 text-xs print:text-xs">Open Theatre</p>
                </div>
              </div>
            </div>

            {/* INSTRUCTIONS - COMPACT */}
            <div className="border border-red-100 rounded-lg p-3 bg-red-50 print:p-2 print:break-inside-avoid">
              <h3 className="font-bold text-red-800 text-sm mb-2 flex items-center print:text-xs">
                <span className="mr-1">⚠️</span> Important Instructions
              </h3>
              <ul className="space-y-1 text-sm print:text-xs">
                <li className="flex items-start">
                  <span className="text-red-600 mr-1">•</span>
                  <span className="text-red-700">Carry College ID Card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-1">•</span>
                  <span className="text-red-700">Show this ticket at entry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-1">•</span>
                  <span className="text-red-700">Free refreshments provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-1">•</span>
                  <span className="text-red-700">Contact: +91 836 998 5931</span>
                </li>
              </ul>
            </div>

            {/* PRINT WATERMARK */}
            <div className="hidden print:block mt-3 pt-2 border-t border-gray-300">
              <div className="text-center text-gray-500 text-xs">
                <p>Government College of Engineering, Karad</p>
                <p className="mt-0.5">Generated: {new Date().toLocaleDateString('en-IN')}</p>
              </div>
            </div>

            {/* ACTION BUTTONS - HIDDEN WHEN PRINTING */}
            <div className="print:hidden mt-4">
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                >
                  <HomeIcon className="h-4 w-4 mr-1" />
                  Back to Home
                </Link>
                
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  <PrinterIcon className="h-4 w-4 mr-1" />
                  Print Ticket
                </button>
              </div>
              <p className="text-center text-gray-500 text-xs mt-2">
                Print this page for entry. Use "Save as PDF" option.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRINT STYLES */}
      <style>{`
        @media print {
          /* Hide unnecessary elements */
          body * {
            visibility: hidden;
          }
          
          /* Show only ticket */
          .bg-white, .bg-white * {
            visibility: visible;
          }
          
          /* Reset page */
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Ticket styling */
          .bg-white {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            margin: 0;
            padding: 0.5cm !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          /* Remove backgrounds for print */
          .bg-blue-50, .bg-green-50, .bg-purple-50, .bg-red-50 {
            background-color: #f9fafb !important;
          }
          
          .from-blue-700 {
            background-color: #1e40af !important;
          }
          
          .from-green-600 {
            background-color: #059669 !important;
            border: 1px solid #047857 !important;
          }
          
          /* Ensure text is black */
          .text-white {
            color: white !important;
          }
          
          /* Compact layout */
          .space-y-4 > * + * {
            margin-top: 8px !important;
          }
          
          /* Font sizes */
          .text-xl { font-size: 18px !important; }
          .text-lg { font-size: 16px !important; }
          .text-sm { font-size: 12px !important; }
          .text-xs { font-size: 10px !important; }
          
          /* Padding */
          .p-4 { padding: 12px !important; }
          .p-3 { padding: 8px !important; }
          .p-2 { padding: 6px !important; }
          
          /* Page setup */
          @page {
            margin: 0.5cm;
            size: A4 portrait;
          }
          
          /* Prevent breaking */
          .print\\:break-inside-avoid {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
        }
        
        /* Web-only styles */
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