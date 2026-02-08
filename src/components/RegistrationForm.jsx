import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const branches = [
  { value: "IT", label: "Information Technology" },
  { value: "MECH", label: "Mechanical Engineering" },
  { value: "Ele", label: "Electrical Engineering" },
  { value: "ENTC", label: "Electronics & Telecommunication" },
  { value: "Civil", label: "Civil Engineering" },
];

const years = [
  { value: "FY", label: "First Year" },
  { value: "SY", label: "Second Year" },
  { value: "TY", label: "Third Year" },
  { value: "Final", label: "Final Year" },
];

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const [pendingRegistration, setPendingRegistration] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    rollNo: "",
    branch: "",
    year: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateTicketNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, "0");
    return `DIS26${timestamp}${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.studentName ||
      !formData.rollNo ||
      !formData.branch ||
      !formData.year ||
      !formData.mobile ||
      !formData.email
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      toast.error("Please enter valid 10-digit mobile number");
      return;
    }

    setLoading(true);

    // Generate ticket number
    const ticketNumber = generateTicketNumber();

    // Create registration object
    const registration = {
      ticketNumber,
      studentName: formData.studentName,
      rollNo: formData.rollNo.toUpperCase(),
      branch: formData.branch,
      year: formData.year,
      mobile: formData.mobile,
      email: formData.email.toLowerCase(),
      registrationTime: new Date().toISOString(),
      status: "registered",
    };

    // Save to localStorage (backup)
    localStorage.setItem("registration", JSON.stringify(registration));

    // Save to pending registrations (for retry)
    const pending = JSON.parse(
      localStorage.getItem("pendingRegistrations") || "[]",
    );
    pending.push({
      ...registration,
      _id: Date.now().toString(),
      retryCount: 0,
    });
    localStorage.setItem("pendingRegistrations", JSON.stringify(pending));
    setPendingRegistration(registration);

    try {
      // Try to save to MongoDB (with longer timeout)
      const response = await saveToMongoDB(registration);

      if (response.success) {
        // SUCCESS - saved to MongoDB
        toast.success("🎉 Registration saved successfully!");

        // Remove from pending
        const updatedPending = pending.filter(
          (p) => p.ticketNumber !== registration.ticketNumber,
        );
        localStorage.setItem(
          "pendingRegistrations",
          JSON.stringify(updatedPending),
        );

        // Redirect to success
        setTimeout(() => {
          navigate("/success");
        }, 500);
      } else {
        // FAILED - show retry option
        toast.error("Server busy. Saving locally for now.");
        setShowRetry(true);
      }
    } catch (error) {
      console.error("MongoDB save error:", error);
      toast.error("Server busy. Saving locally for now.");
      setShowRetry(true);
    } finally {
      setLoading(false);
    }
  };

  // Function to save to MongoDB
  const saveToMongoDB = async (registration) => {
    try {
      // Create abort controller with 45-second timeout (Render free tier limit)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 45000);

      const response = await fetch(
        "https://dhishan-backend.onrender.com/api/registration/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registration),
          signal: controller.signal,
        },
      );

      clearTimeout(timeoutId);

      if (response.ok) {
        return { success: true };
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      throw error;
    }
  };

  const retrySave = async () => {
    if (!pendingRegistration) return;

    setLoading(true);
    setShowRetry(false);

    try {
      const response = await saveToMongoDB(pendingRegistration);

      if (response.success) {
        toast.success("✅ Saved to database!");

        // Remove from pending
        const pending = JSON.parse(
          localStorage.getItem("pendingRegistrations") || "[]",
        );
        const updated = pending.filter(
          (p) => p.ticketNumber !== pendingRegistration.ticketNumber,
        );
        localStorage.setItem("pendingRegistrations", JSON.stringify(updated));

        setTimeout(() => {
          navigate("/success");
        }, 500);
      } else {
        toast.error("Still busy. Your data is saved locally.");
        setShowRetry(true);
      }
    } catch (error) {
      toast.error("Server still busy. Data saved locally.");
      setShowRetry(true);
    } finally {
      setLoading(false);
    }
  };

  const proceedWithLocalOnly = () => {
    toast.info("⚠️ Data saved locally only. Will sync later.");
    setShowRetry(false);
    setTimeout(() => {
      navigate("/success");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Your form fields (same as before) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Student Name *
          </label>
          <input
            type="text"
            name="studentName"
            required
            value={formData.studentName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Roll Number *
          </label>
          <input
            type="text"
            name="rollNo"
            required
            value={formData.rollNo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
            placeholder="e.g., 21IT001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Branch *
          </label>
          <select
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch.value} value={branch.value}>
                {branch.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year *
          </label>
          <select
            name="year"
            required
            value={formData.year}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select Year</option>
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Number *
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
              +91
            </span>
            <input
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="9876543210"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="student@gcek.ac.in"
          />
        </div>
      </div>

      {/* Retry Section */}
      {showRetry && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700 font-semibold mb-2">
                ⚠️ Server is busy right now
              </p>
              <p className="text-sm text-yellow-600 mb-3">
                Your registration is saved locally. Try saving to database now:
              </p>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={retrySave}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
                >
                  🔄 Retry Save to Database
                </button>
                <button
                  type="button"
                  onClick={proceedWithLocalOnly}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700"
                >
                  Proceed with Local Only
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Important:</strong> Registration will try to save to
              database.
              <br />
              If server is busy, data will be saved locally first.
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Saving to Database...
          </div>
        ) : (
          "Register Now (Free)"
        )}
      </button>
    </form>
  );
}
