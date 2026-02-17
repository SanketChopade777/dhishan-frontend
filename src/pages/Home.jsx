import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  TicketIcon,
  UserGroupIcon,
  BellIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Poster */}
      <div className="relative h-auto min-h-[100vh] overflow-hidden">
        {/* Poster Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/logo.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
        </div>

        {/* Content Overlay - Scrollable on mobile */}
        <div className="relative h-full flex items-center px-4 sm:px-6 py-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
              {/* Left Side - Event Details (Top on mobile) */}
              <div className="w-full lg:w-1/2 text-white space-y-6">
                <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500/30">
                  <BellIcon className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-semibold text-yellow-300">
                    Registration Open Now
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    DHISHAN
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mt-1">
                    '26
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 max-w-lg">
                  The Annual Technical Extravaganza of Government College of
                  Engineering, Karad
                </p>

                {/* Event Info Cards - Stack on mobile */}
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-5 w-5 text-blue-400" />
                      <div>
                        <p className="text-xs text-gray-300">Date</p>
                        <p className="text-sm font-bold">15 Feb 2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-xs text-gray-300">Venue</p>
                        <p className="text-sm font-bold">Open Theatre</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  // to="/register"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg text-base hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-500/25 w-full sm:w-auto"
                >
                  <span>Registration Closed!</span>
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Right Side - Stats & Highlights (Bottom on mobile) */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 border border-white/10 shadow-2xl max-h-[500px] overflow-y-auto">
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
                    <TicketIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    Event Highlights
                  </h2>

                  <div className="space-y-3">
                    {/* Seat Info */}
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg border border-blue-500/20">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <UserGroupIcon className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-300">Total Seats</p>
                          <p className="text-base font-bold text-white">
                            1,000
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-300">Available</p>
                        <p className="text-sm font-semibold text-green-400">
                          Open
                        </p>
                      </div>
                    </div>

                    {/* Refreshments */}
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-900/30 to-purple-800/20 rounded-lg border border-purple-500/20">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <EnvelopeIcon className="h-4 w-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-300">
                          Free Refreshments
                        </p>
                        <p className="text-sm font-semibold text-white">
                          For All Registered
                        </p>
                      </div>
                    </div>

                    {/* Countdown Timer - Mobile Optimized */}
                    <MobileCountdownTimer />

                    {/* Warning */}
                    <div className="p-3 bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-lg border border-red-500/20">
                      <div className="flex items-start space-x-2">
                        <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="h-4 w-4 text-red-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white mb-1">
                            ⚠️ Strictly for GCEK Students Only
                          </p>
                          <p className="text-xs text-gray-300">
                            College ID card mandatory. Legal action against
                            violators.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-center text-white font-semibold text-sm">
                      Contact: Kiran Barkade (+91 836 998 5931)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Only show on mobile when content overflows */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
          <div className="animate-bounce">
            <svg
              className="h-6 w-6 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Info Section - More compact on mobile */}
      <div className="bg-gray-900 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 mb-2">
                <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Event Timing
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                10:00 AM - 08:00 PM
              </p>
              <p className="text-xs sm:text-sm text-gray-400">Full Day</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 mb-2">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Location
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">Open Theatre</p>
              <p className="text-xs sm:text-sm text-gray-400">GCEK, Karad</p>
            </div>

            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 mb-2">
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Registration
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Completely Free
              </p>
              <p className="text-xs sm:text-sm text-gray-400">
                First-come Basis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile-optimized Countdown Timer
function MobileCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("February 15, 2026 10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-3 bg-gradient-to-r from-indigo-900/30 to-indigo-800/20 rounded-lg border border-indigo-500/20">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <ClockIcon className="h-4 w-4 text-indigo-400" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-gray-300 mb-1">Event starts in</p>
          <div className="flex justify-between">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-base font-bold text-white">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400">{unit.charAt(0)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
