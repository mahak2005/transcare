
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBook, FaBell } from "react-icons/fa";
import { Navbar } from "@/components/navigation/navbar"

// Define types for therapists and reminders
type Therapist = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  yearsExperience: number;
  languages: string[];
};

type Reminder = {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
};

export default function MentalHealthWellness() {
  const [activeTab, setActiveTab] = useState("therapist");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mental Health & Wellness */}
        </motion.h1>

        <div className="flex justify-center mb-8">
          <TabButton
            icon={<FaSearch />}
            label="Therapist Finder"
            active={activeTab === "therapist"}
            onClick={() => setActiveTab("therapist")}
          />
          <TabButton
            icon={<FaBook />}
            label="Mental Health Resources"
            active={activeTab === "resources"}
            onClick={() => setActiveTab("resources")}
          />
          <TabButton
            icon={<FaBell />}
            label="Wellness Reminders"
            active={activeTab === "reminders"}
            onClick={() => setActiveTab("reminders")}
          />
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          {activeTab === "therapist" && <TherapistFinder />}
          {activeTab === "resources" && <MentalHealthResources />}
          {activeTab === "reminders" && <WellnessReminders />}
        </motion.div>
      </div>
    </div>
  );
}

// Define props for TabButton
type TabButtonProps = {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
};

function TabButton({ icon, label, active, onClick }: TabButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center px-4 py-2 mx-2 rounded-full ${active ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"
        }`}
      onClick={onClick}
      aria-label={label}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </motion.button>
  );
}

function TherapistFinder() {
  const [pincode, setPincode] = useState("");
  const [therapists, setTherapists] = useState<Therapist[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hardcoded therapist data
    setTherapists([
      {
        id: 1,
        name: "Dr. Emily Chen",
        specialty: "LGBTQ+ Counseling",
        rating: 4.9,
        yearsExperience: 10,
        languages: ["English", "Mandarin"],
      },
      {
        id: 2,
        name: "Dr. Michael Rodriguez",
        specialty: "Gender Identity Specialist",
        rating: 4.8,
        yearsExperience: 8,
        languages: ["English", "Spanish"],
      },
      {
        id: 3,
        name: "Dr. Sarah Johnson",
        specialty: "Transgender Health",
        rating: 4.7,
        yearsExperience: 12,
        languages: ["English"],
      },
      {
        id: 4,
        name: "Dr. Alex Kim",
        specialty: "LGBTQ+ Youth Counseling",
        rating: 4.9,
        yearsExperience: 6,
        languages: ["English", "Korean"],
      },
      {
        id: 5,
        name: "Dr. Olivia Martinez",
        specialty: "Gender Transition Counseling",
        rating: 4.8,
        yearsExperience: 9,
        languages: ["English", "Spanish"],
      },
    ]);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Find LGBTQ+-Friendly Therapists</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter your pincode"
            className="flex-grow p-2 border border-gray-300 rounded-l"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-r"
          >
            Search
          </motion.button>
        </div>
      </form>
      {therapists.length > 0 && (
        <div className="space-y-4">
          {therapists.map((therapist) => (
            <motion.div
              key={therapist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold">{therapist.name}</h3>
              <p>
                <strong>Specialty:</strong> {therapist.specialty}
              </p>
              <p>
                <strong>Rating:</strong> {therapist.rating}/5
              </p>
              <p>
                <strong>Experience:</strong> {therapist.yearsExperience} years
              </p>
              <p>
                <strong>Languages:</strong> {therapist.languages.join(", ")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-purple-600 text-white px-4 py-2 rounded"
              >
                Book Session
              </motion.button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function MentalHealthResources() {
  const resources = [
    {
      id: 1,
      title: "Understanding Gender Dysphoria",
      type: "Article",
      description: "An in-depth look at gender dysphoria, its symptoms, and coping strategies.",
      link: "#",
    },
    {
      id: 2,
      title: "LGBTQ+ Support Group - Virtual Meetings",
      type: "Support Group",
      description: "Weekly online meetings for LGBTQ+ individuals to share experiences and find support.",
      link: "#",
    },
    {
      id: 3,
      title: "Mindfulness for Gender Dysphoria",
      type: "Mental Health Tool",
      description: "A collection of mindfulness exercises specifically designed to help manage gender dysphoria.",
      link: "#",
    },
    {
      id: 4,
      title: "Coming Out: A Guide for LGBTQ+ Youth",
      type: "E-Book",
      description: "A comprehensive guide to coming out, including tips, personal stories, and resources.",
      link: "#",
    },
    {
      id: 5,
      title: "Trans-Inclusive Workplace Policies",
      type: "Informational Guide",
      description: "Information on creating and advocating for trans-inclusive policies in the workplace.",
      link: "#",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Mental Health Resources</h2>
      <div className="space-y-4">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-4 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{resource.title}</h3>
            <p className="text-gray-600">{resource.type}</p>
            <p className="mt-2">{resource.description}</p>
            <motion.a
              href={resource.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 inline-block bg-purple-600 text-white px-4 py-2 rounded"
            >
              Access Resource
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WellnessReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Therapy Session", date: "2023-06-15", time: "14:00", type: "Appointment" },
    { id: 2, title: "Daily Mood Check-in", date: "Every day", time: "09:00", type: "Self-care" },
    { id: 3, title: "Mindfulness Exercise", date: "Every day", time: "20:00", type: "Self-care" },
    { id: 4, title: "Support Group Meeting", date: "2023-06-20", time: "18:30", type: "Support" },
    { id: 5, title: "Hormone Therapy Follow-up", date: "2023-07-01", time: "10:00", type: "Medical" },
  ]);

  const addReminder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Use type assertions to tell TypeScript about the form elements
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value;
    const type = (form.elements.namedItem("type") as HTMLSelectElement).value;

    const newReminder: Reminder = {
      id: reminders.length + 1,
      title,
      date,
      time,
      type,
    };

    setReminders([...reminders, newReminder]);
    form.reset();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Wellness Reminders</h2>
      <form onSubmit={addReminder} className="mb-6 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Reminder Title"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input type="date" name="date" className="w-full p-2 border border-gray-300 rounded" required />
        <input type="time" name="time" className="w-full p-2 border border-gray-300 rounded" required />
        <select name="type" className="w-full p-2 border border-gray-300 rounded" required>
          <option value="">Select Type</option>
          <option value="Appointment">Appointment</option>
          <option value="Self-care">Self-care</option>
          <option value="Support">Support</option>
          <option value="Medical">Medical</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-purple-600 text-white px-4 py-2 rounded"
        >
          Add Reminder
        </motion.button>
      </form>
      <div className="space-y-4">
        {reminders.map((reminder) => (
          <motion.div
            key={reminder.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{reminder.title}</h3>
              <p>
                {reminder.date} at {reminder.time}
              </p>
              <p className="text-gray-600">{reminder.type}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => setReminders(reminders.filter((r) => r.id !== reminder.id))}
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}