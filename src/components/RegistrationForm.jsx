import { useState } from "react";
import { toast } from "react-toastify";
import { registerForEvent } from "../services/api";

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

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);

  //     try {
  //       const response = await registerForEvent(formData);
  //       toast.success(response.data.message);

  //       // Store registration data for success page
  //       localStorage.setItem("registration", JSON.stringify(response.data.data));

  //       // Redirect to success page
  //       window.location.href = "/success";
  //     } catch (error) {
  //       toast.error(error.response?.data?.message || "Registration failed!");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate ticket
    const ticketNumber = `DIS26${Date.now().toString().slice(-6)}`;

    // Save to localStorage
    const registration = {
      ticketNumber,
      ...formData,
      registrationTime: new Date().toISOString(),
    };

    localStorage.setItem("registration", JSON.stringify(registration));

    // Redirect to success immediately
    window.location.href = "/success";

    // Try to save to backend silently (ignore errors)
    try {
      await fetch(
        "https://dhishan-backend.onrender.com/api/registration/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors", // Don't wait for response
        },
      );
    } catch (e) {
      // Ignore all errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <span className="inline-flex items-center border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg">
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

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Important:</strong> Only GCEK students are allowed.
              Registration is free. Only 1500 seats available. Schedule will be
              emailed.
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
      >
        {loading ? "Registering..." : "Register Now (Free)"}
      </button>
    </form>
  );
}
