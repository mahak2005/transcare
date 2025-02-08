import { Truck } from "lucide-react"

const deliveries = [
  { id: 1, medication: "Estradiol", status: "Shipped", expectedDelivery: "2023-06-18" },
  { id: 2, medication: "Spironolactone", status: "Processing", expectedDelivery: "2023-06-20" },
  { id: 3, medication: "Progesterone", status: "Delivered", expectedDelivery: "2023-06-15" },
]

export default function MedicationDeliveryTracking() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Truck className="mr-2" /> Medication Delivery Tracking
      </h2>
      <div className="space-y-4">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="border rounded-md p-4">
            <h3 className="font-medium">{delivery.medication}</h3>
            <p className="text-sm text-gray-600">Status: {delivery.status}</p>
            <p className="text-sm text-gray-600 mt-2">Expected Delivery: {delivery.expectedDelivery}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

