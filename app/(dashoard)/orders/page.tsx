export default function OrdersPage() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Orders</h1>
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-600">You have no orders today</p>
        </div>
      </div>
    </div>
  );
}
