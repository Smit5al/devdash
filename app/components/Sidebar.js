export default function Sidebar() {
    return (
      <div className="bg-blue-900 w-64 p-8">
        <h1 className="text-white text-2xl font-bold mb-8">DevDash</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="text-blue-200 hover:text-white">🔍 AI Search</a>
          <a href="#" className="text-blue-200 hover:text-white">📋 Projects</a>
          <a href="#" className="text-blue-200 hover:text-white">🧠 Notes</a>
          <a href="#" className="text-blue-200 hover:text-white">📊 Progress</a>
        </nav>
      </div>
    )
  }