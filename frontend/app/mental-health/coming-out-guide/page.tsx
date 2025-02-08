
// import { useNavigate } from "react-router-dom";

// export default function ComingOutGuide() {
//   const navigate = useNavigate();

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <button onClick={() => navigate(-1)} className="text-blue-600 underline mb-4">
//         ← Back to Resources
//       </button>
//       <h1 className="text-3xl font-bold mb-4">Coming Out: A Guide for LGBTQ+ Youth</h1>
//       <p className="text-gray-600 italic">By LGBTQ+ Support Community</p>

//       <div className="mt-6 space-y-4">
//         <p>
//           Coming out is a deeply personal and unique journey for every individual. It involves understanding your identity, deciding whom to tell, and preparing for various reactions. 
//         </p>

//         <h2 className="text-2xl font-semibold">🌟 What Does Coming Out Mean?</h2>
//         <p>
//           "Coming out" is the process of recognizing, accepting, and sharing your LGBTQ+ identity with others. It can be both empowering and challenging.
//         </p>

//         <h2 className="text-2xl font-semibold">💡 Steps to Coming Out Safely</h2>
//         <ul className="list-disc ml-6 space-y-2">
//           <li><strong>Self-Acceptance:</strong> Take time to understand your feelings and identity.</li>
//           <li><strong>Support System:</strong> Identify trusted friends, family, or support groups.</li>
//           <li><strong>Plan Your Conversation:</strong> Think about what you want to say and how to express it.</li>
//           <li><strong>Be Prepared for Reactions:</strong> Responses can vary; stay strong and seek support if needed.</li>
//         </ul>

//         <h2 className="text-2xl font-semibold">🏳️‍🌈 Resources for LGBTQ+ Youth</h2>
//         <p>Explore LGBTQ+ helplines, online communities, and legal protections available in your region.</p>

//         <h2 className="text-2xl font-semibold">🎯 Final Thoughts</h2>
//         <p>
//           Coming out is your decision, and there's no right or wrong way to do it. Surround yourself with supportive people and remember that your identity is valid and important.
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image component

export default function ComingOutGuide() {
  const router = useRouter();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button onClick={() => router.back()} className="text-blue-600 underline mb-4">
        ← Back to Resources
      </button>
      <h1 className="text-3xl font-bold mb-4">Coming Out: A Guide for LGBTQ+ Youth</h1>
      <p className="text-gray-600 italic">By LGBTQ+ Support Community</p>

      <div className="mt-6 space-y-4">
        <p>
          Coming out is a deeply personal and unique journey for every individual. It involves understanding your identity, deciding whom to tell, and preparing for various reactions.
        </p>

        <h2 className="text-2xl font-semibold">🌟 What Does Coming Out Mean?</h2>
        <p>
          "Coming out" is the process of recognizing, accepting, and sharing your LGBTQ+ identity with others. It can be both empowering and challenging.
        </p>

        <div className="flex justify-center my-4">
          <Image 
            src="/lgbt.png"  // Ensure this image exists in the public/images directory
            alt="Illustration of coming out"
            width={350} // Decreased width
            height={150} // Decreased height to maintain aspect ratio
            objectFit="contain" // Ensures full image is shown without cropping
            className="rounded-lg shadow-md"
          />
        </div>

        <h2 className="text-2xl font-semibold">💡 Steps to Coming Out Safely</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Self-Acceptance:</strong> Take time to understand your feelings and identity.</li>
          <li><strong>Support System:</strong> Identify trusted friends, family, or support groups.</li>
          <li><strong>Plan Your Conversation:</strong> Think about what you want to say and how to express it.</li>
          <li><strong>Be Prepared for Reactions:</strong> Responses can vary; stay strong and seek support if needed.</li>
        </ul>

        <h2 className="text-2xl font-semibold">🏳️‍🌈 Resources for LGBTQ+ Youth</h2>
        <p>Explore LGBTQ+ helplines, online communities, and legal protections available in your region.</p>

        <h2 className="text-2xl font-semibold">🎯 Final Thoughts</h2>
        <p>
          Coming out is your decision, and there's no right or wrong way to do it. Surround yourself with supportive people and remember that your identity is valid and important.
        </p>
      </div>
    </div>
  );
}
