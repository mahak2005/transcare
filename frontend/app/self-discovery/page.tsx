"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle, FaBookOpen, FaPencilAlt } from "react-icons/fa";
import { IconType } from "react-icons"; // Import type for icons
import { Navbar } from "@/components/navigation/navbar"

export default function SelfDiscoveryPage() {
  const [activeSection, setActiveSection] = useState("quizzes");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Self-Discovery Journey
        </motion.h1>

        <div className="flex justify-center mb-8 space-x-4">
          <FeatureButton
            icon={FaQuestionCircle} // Pass the component reference, not JSX
            label="Quizzes"
            active={activeSection === "quizzes"}
            onClick={() => setActiveSection("quizzes")}
          />
          <FeatureButton
            icon={FaBookOpen}
            label="Resources"
            active={activeSection === "resources"}
            onClick={() => setActiveSection("resources")}
          />
          <FeatureButton
            icon={FaPencilAlt}
            label="Journal"
            active={activeSection === "journal"}
            onClick={() => setActiveSection("journal")}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            {activeSection === "quizzes" && <Quizzes />}
            {activeSection === "resources" && <PersonalizedResources />}
            {activeSection === "journal" && <JournalingTools />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ✅ Fix: Define Prop Types for FeatureButton
function FeatureButton({
  icon: Icon, // Capitalize component reference
  label,
  active,
  onClick,
}: {
  icon: IconType; // Use IconType for the icon prop
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${active ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-purple-200"
        }`}
      onClick={onClick}
    >
      <Icon className="text-lg" /> {/* Render the icon component */}
      <span className="ml-2">{label}</span>
    </motion.button>
  );
}

function Quizzes() {
  const quizzes = [
    { id: 1, title: "Gender Identity Exploration", description: "Understand your gender identity and expression." },
    { id: 2, title: "Sexual Orientation Spectrum", description: "Explore your sexual and romantic attractions." },
    {
      id: 3,
      title: "Emotional Well-being Assessment",
      description: "Gauge your current emotional state and mental health.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Self-Discovery Quizzes</h2>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{quiz.title}</h3>
            <p className="mt-2">{quiz.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Start Quiz
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PersonalizedResources() {
  const resources = [
    { id: 1, title: "Understanding Non-Binary Identities", type: "Article" },
    { id: 2, title: "LGBTQ+ Support Group - Virtual Meetings", type: "Support Group" },
    { id: 3, title: "Mindfulness for Gender Dysphoria", type: "Mental Health Tool" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Personalized Resources</h2>
      <p className="mb-4 text-gray-600">Based on your quiz results, we recommend the following resources:</p>
      <div className="space-y-4">
        {resources.map((resource) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold">{resource.title}</h3>
            <p className="mt-2 text-gray-600">{resource.type}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Explore
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function JournalingTools() {
  const [entries, setEntries] = useState<{ id: number; text: string; date: string }[]>([]);
  const [newEntry, setNewEntry] = useState("");

  const addEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEntry.trim()) {
      setEntries([{ id: Date.now(), text: newEntry, date: new Date().toLocaleString() }, ...entries]);
      setNewEntry("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Journaling Tools</h2>
      <form onSubmit={addEntry} className="mb-6">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full p-2 border border-gray-300 rounded-lg resize-none h-32"
          required
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
        >
          Save Entry
        </motion.button>
      </form>
      <div className="space-y-4">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg shadow-md"
          >
            <p className="text-gray-600 text-sm">{entry.date}</p>
            <p className="mt-2">{entry.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}