"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from '@/components/navigation/navbar';

export default function About() {
  const [formData, setFormData] = useState({
    preferredName: "",
    genderIdentity: "",
    pronouns: "",
    transitioningStage: "",
    supportSystem: "",
    mentalHealthChallenges: "",
    medications: "",
    productsUsed: "",
    pastHealthcareExperience: "",
    preferredResources: "",
    additionalComments: "",
    character: "",
    food:"",
    selfcare: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Show pop-up
  };

  return (
    <div className ="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
        <Navbar />
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
         
         
     {/* Heading */}
      <h1 className="text-3xl font-bold text-purple-600 mb-6">About You</h1>
      <p className="text-gray-600 mb-4">Help us personalize your experience by answering a few questions.</p>

    {/* Form Start */}
    <form onSubmit={handleSubmit}>
      {/* Preferred Name */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">What is your preferred name?</label>
        <input
          type="text"
          name="preferredName"
          placeholder="Your name or chosen name"
          value={formData.preferredName}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      {/* Transitioning Stage */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Are you currently transitioning?</label>
        <div className="mt-2 space-y-2">
          {["Pre-transition", "Currently transitioning", "Post-transition", "Not planning to transition"].map((option) => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="transitioningStage"
                value={option}
                checked={formData.transitioningStage === option}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
      {/* entertainment */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Which type of movies do you enjoy the most?</label>
        <div className="mt-2 space-y-2">
          {["Drama", "Comedy", "Thriller", "Romance", "Action"].map((option) => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="movies"
                value={option}
                checked={formData.transitioningStage === option}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

          {/*favourite person*/}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Who is your favorite LGBTQ+ character in movies/series?</label>
        <input
          type="text"
          name="character"
          placeholder=""
          value={formData.character}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>
          {/*diet*/}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Do you follow any specific Diet?</label>
        <input
          type="text"
          name="food"
          placeholder="What's your favorite food?"
          value={formData.food}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      {/* Support System */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Do you have a strong support system?</label>
        <div className="mt-2 space-y-2">
          {["Yes, from friends & family", "Only online communities", "Not really", "No, I feel isolated"].map((option) => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="supportSystem"
                value={option}
                checked={formData.supportSystem === option}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Medications */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">Are you currently taking any medications?</label>
        <input
          type="text"
          name="medications"
          placeholder="e.g., HRT, antidepressants, anxiety meds"
          value={formData.medications}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>


      {/* Preferred Resources */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700">What kind of resources would you find most helpful?</label>
        <textarea
          name="preferredResources"
          placeholder="e.g., Therapy, Support Groups, Hormone Therapy Information"
          value={formData.preferredResources}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      {/* Additional Comments */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700">Anything else you'd like us to know?</label>
        <textarea
          name="additionalComments"
          placeholder="Share your thoughts or suggestions"
          value={formData.additionalComments}
          onChange={handleChange}
          className="w-full mt-2 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
      >
        Submit
      </motion.button>
    
    </form>

    {/* Pop-up Modal */}
    {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Submitted Successfully! 🎉</h2>
            <p className="text-gray-600">Thank you for sharing your details.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
