import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function SyncPage() {
  const [pendingRegs, setPendingRegs] = useState([]);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    loadPendingRegistrations();
  }, []);

  const loadPendingRegistrations = () => {
    const pending = JSON.parse(
      localStorage.getItem("pendingRegistrations") || "[]",
    );
    setPendingRegs(pending);
  };

  const syncToMongoDB = async () => {
    if (pendingRegs.length === 0) return;

    setSyncing(true);
    let successCount = 0;
    let failCount = 0;

    for (const reg of pendingRegs) {
      try {
        const response = await fetch(
          "https://dhishan-backend.onrender.com/api/registration/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reg),
          },
        );

        if (response.ok) {
          successCount++;
          // Remove from pending
          const updated = pendingRegs.filter(
            (p) => p.ticketNumber !== reg.ticketNumber,
          );
          localStorage.setItem("pendingRegistrations", JSON.stringify(updated));
        } else {
          failCount++;
        }
      } catch (error) {
        failCount++;
      }
    }

    toast.success(`Synced ${successCount} registrations. Failed: ${failCount}`);
    loadPendingRegistrations();
    setSyncing(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Sync Local Registrations to MongoDB
      </h1>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p>
          Pending registrations: <strong>{pendingRegs.length}</strong>
        </p>
        <p className="text-sm text-gray-600 mt-1">
          These registrations are saved locally and need to be synced to
          database.
        </p>
      </div>

      <button
        onClick={syncToMongoDB}
        disabled={syncing || pendingRegs.length === 0}
        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 mb-6"
      >
        {syncing
          ? "Syncing..."
          : `Sync ${pendingRegs.length} Registrations to MongoDB`}
      </button>

      {pendingRegs.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Ticket No</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Roll No</th>
                <th className="p-3 border">Branch</th>
                <th className="p-3 border">Year</th>
                <th className="p-3 border">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {pendingRegs.map((reg, index) => (
                <tr key={index} className="border hover:bg-gray-50">
                  <td className="p-3 border font-mono">{reg.ticketNumber}</td>
                  <td className="p-3 border">{reg.studentName}</td>
                  <td className="p-3 border">{reg.rollNo}</td>
                  <td className="p-3 border">{reg.branch}</td>
                  <td className="p-3 border">{reg.year}</td>
                  <td className="p-3 border">+91 {reg.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
