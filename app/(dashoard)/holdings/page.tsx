export default function HoldingsPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Holdings</h1>
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600 mb-4">You don't have any holdings yet</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Start investing
          </button>
        </div>
      </div>
    </div>
  );
}
