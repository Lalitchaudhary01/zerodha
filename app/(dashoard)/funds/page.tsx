export default function FundsPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Funds</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-2">Available margin</h3>
            <p className="text-3xl font-bold text-gray-900">₹0.00</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm text-gray-600 mb-2">Used margin</h3>
            <p className="text-3xl font-bold text-gray-900">₹0.00</p>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded w-full">
            Add funds
          </button>
        </div>
      </div>
    </div>
  );
}
