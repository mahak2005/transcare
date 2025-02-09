import { Calendar, Clock } from "lucide-react"

const appointments = [
  {
    id: 1,
    doctor: "Dr. Sneha Chauhan",
    specialization: "Endocrinologist",
    date: "2023-06-15",
    time: "10:00 AM",
    link: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: 2,
    doctor: "Dr. Sudhir Kumar",
    specialization: "HRT Specialist",
    date: "2023-06-22",
    time: "2:30 PM",
    link: "https://meet.google.com/klm-nopq-rst",
  },
]

export default function AppointmentScheduler() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Calendar className="mr-2" /> Appointment Scheduler
      </h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border rounded-md p-4">
            <h3 className="font-medium">{appointment.doctor}</h3>
            <p className="text-sm text-gray-600">{appointment.specialization}</p>
            <p className="text-sm text-gray-600 flex items-center mt-2">
              <Clock className="mr-1 w-4 h-4" /> {appointment.date} at {appointment.time}
            </p>
            <a
              href={appointment.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-600 hover:underline"
            >
              Join Google Meet
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

