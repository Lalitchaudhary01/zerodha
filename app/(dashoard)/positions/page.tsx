export default function PositionsPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Positions</h1>
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button className="px-6 py-4 text-blue-600 border-b-2 border-blue-600">
                Day
              </button>
              <button className="px-6 py-4 text-gray-600 hover:text-gray-800">
                Overall
              </button>
            </nav>
          </div>
          <div className="p-8 text-center">
            <p className="text-gray-600">You don't have any open positions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
