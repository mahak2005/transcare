import { Pill, RefreshCw } from "lucide-react"

const prescriptions = [
    { id: 1, name: "Estradiol", dosage: "2mg, twice daily", refillStatus: "Refill available" },
    { id: 2, name: "Spironolactone", dosage: "100mg, once daily", refillStatus: "Refill in 2 weeks" },
    { id: 3, name: "Progesterone", dosage: "100mg, once daily at bedtime", refillStatus: "Refill available" },
]

export default function PrescriptionManagement() {
    const handleRefill = (name: string) => {
        alert(`Refill request submitted for ${name}`)
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Pill className="mr-2" /> Prescription Management
            </h2>
            <div className="space-y-4">
                {prescriptions.map((prescription) => (
                    <div key={prescription.id} className="border rounded-md p-4">
                        <h3 className="font-medium">{prescription.name}</h3>
                        <p className="text-sm text-gray-600">{prescription.dosage}</p>
                        <p className="text-sm text-gray-600 mt-2">{prescription.refillStatus}</p>
                        <button
                            onClick={() => handleRefill(prescription.name)}
                            className="mt-2 bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700 transition-colors text-sm flex items-center"
                        >
                            <RefreshCw className="mr-1 w-4 h-4" /> Refill
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

