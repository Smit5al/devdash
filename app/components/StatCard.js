export default function StatCard({ title, value }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow w-64">
        <p className="text-gray-500">{title}</p>
        <h3 className="text-3xl font-bold text-gray-800 mt-2">{value}</h3>
      </div>
    )
  }