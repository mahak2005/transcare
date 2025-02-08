import { Video } from "lucide-react"

export default function VideoConsultation() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Video className="mr-2" /> Video Consultation
            </h2>
            <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                    src="https://meet.google.com/embed/abcd-efgh-ijkl"
                    allow="camera; microphone; fullscreen; display-capture"
                    className="w-full h-full rounded-md"
                ></iframe>
            </div>
            <a
                href="https://meet.google.com/abcd-efgh-ijkl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors inline-block"
            >
                Join Consultation
            </a>
        </div>
    )
}

