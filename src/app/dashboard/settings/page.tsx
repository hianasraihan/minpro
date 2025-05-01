"use client";
import { useState } from "react";

export default function DashboardSettings() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div className="p-8 w-full max-w-4xl ml-6">
      <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-lg font-medium mb-1 text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium mb-1 text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-medium mb-1 text-gray-700">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank to keep current password"
          />
        </div>

        {/* Save Button */}
        <div>
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
