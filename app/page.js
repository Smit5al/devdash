import StatCard from "./components/StatCard";
import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="bg-blue-900 w-64 p-8">
        <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome back 👋</h2>
        <p className="text-gray-500 mt-2">Here's what's happening today.</p>

        <div className="flex gap-6 mt-8">
          <StatCard title="AI Searches" value="24" />
          <StatCard title="Notes Saved" value="12" />
          <StatCard title="Tasks Done" value="8" />
        </div>
        
      </div>

    </div>
  )
}