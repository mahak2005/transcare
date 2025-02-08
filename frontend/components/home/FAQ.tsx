"use client"

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is TransCare Navigator?',
    answer: 'TransCare Navigator is a digital platform that helps transgender individuals find gender-affirming healthcare, manage health records, access mental health support, and connect with the community.'
  },
  {
    question: 'How can I find gender-affirming healthcare providers?',
    answer: 'Use our healthcare locator feature to search for verified, trans-friendly healthcare providers near you. You can filter results by services, location, and read community reviews.'
  },
  {
    question: 'Can I securely store my medical records?',
    answer: 'Yes, TransCare Navigator offers a secure digital health record feature where you can store your medical records, including chosen names, pronouns, and sync them with your healthcare providers.'
  },
  {
    question: 'How do I access mental health support?',
    answer: 'You can find mental health professionals through our platform and schedule telemedicine sessions. We also offer peer support groups and community forums for emotional support.'
  },
  {
    question: 'Is there a way to track my medication and appointments?',
    answer: 'Yes, you can set reminders for medication, lab tests, and appointments directly within the platform to stay on top of your health routine.'
  },
  {
    question: 'Do you offer resources for surgeries and hormone therapy?',
    answer: 'Our platform includes comprehensive resources on gender-affirming surgeries and hormone therapy, with community-based reviews to ensure reliability.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-8">
        We are here to help you with any questions you may have. If you don't find what you need, please contact us at {' '}
        <a href="mailto:support@transcarenavigator.com" className="text-blue-500 underline">
          support@transcarenavigator.com
        </a>.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium"
            >
              {faq.question}
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
