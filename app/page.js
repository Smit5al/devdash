"use client";

import { useState } from "react";
import StatCard from "./components/StatCard";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [searches, setSearches] = useState(0);
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar/>
      

      {/* Main Content */}
      <div className="bg-gray-100 flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome back 👋</h2>
        <p className="text-gray-500 mt-2">Here's what's happening today.</p>

        <div className="flex gap-6 mt-8">
          <StatCard title="AI Searches" value={searches} />
          <StatCard title="Notes Saved" value="12" />
          <StatCard title="Tasks Done" value="8" />
        </div>
        <button
          onClick={() => setSearches(searches + 1)}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Add Search
        </button>
        
      </div>

    </div>
  )
}