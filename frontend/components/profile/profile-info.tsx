
// "use client"

// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"

// // import { Plus } from "lucide-react"

// export function ProfileInfo() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full lg:w-80 space-y-6"
//     >
//       <section className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">PRIMARY INFO</h2>
//           <Button variant="ghost" size="sm">
//             EDIT
//           </Button>
//         </div>
//         <div className="space-y-2">
//           <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
//             + Add Birthdate
//           </button>
//           <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
//             + Add Gender
//           </button>
//           <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
//             + Add Location
//           </button>
//         </div>
//       </section>

//       <section className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">MORE INFO</h2>
//           <Button variant="ghost" size="sm">
//             EDIT
//           </Button>
//         </div>
//         <div className="space-y-4">
//           <div>
//             <h3 className="text-sm font-medium text-slate-600">PROFILE STATUS</h3>
//             <p className="text-sm text-slate-500">Professional</p>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-slate-600 mb-2">TEAM</h3>
//             <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
//               + Add Team
//             </button>
//           </div>
//           <div>
//             <h3 className="text-sm font-medium text-slate-600 mb-2">COLLEGE</h3>
//             <button className="w-full py-2 text-slate-500 border-2 border-dashed border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
//               + Add School
//             </button>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   )
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// // import { Calendar } from "@/components/ui/calendar";

 


// export function ProfileInfo() {
//   // const [birthdate, setBirthdate] = useState("");
//   const [gender, setGender] = useState("");
//   const [location, setLocation] = useState("");
//   // const [showCalendar, setShowCalendar] = useState(false);

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full lg:w-80 space-y-6"
//     >
//       {/* Primary Info Section */}
//       <section className="bg-white rounded-lg shadow-sm p-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">PRIMARY INFO</h2>
//         </div>
//         <div className="space-y-4">
          

//           {/* Gender Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Gender
//             </label>
//             <Input
//               type="text"
//               placeholder="Enter your gender"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="w-full py-2 text-slate-600 border rounded-lg"
//             />
//           </div>

//           {/* Location Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Location
//             </label>
//             <Input
//               type="text"
//               placeholder="Enter your location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full py-2 text-slate-600 border rounded-lg"
//             />
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function ProfileInfo() {
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [birthdate, setBirthdate] = useState<Date | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-80 space-y-6"
    >
      {/* Primary Info Section */}
      <section className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">PRIMARY INFO</h2>
        </div>
        <div className="space-y-4">
          {/* Birthdate Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Birthdate
            </label>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="w-full py-2 text-slate-500 border border-gray-300 rounded-lg"
            >
              {birthdate ? birthdate.toDateString() : "+ Select Birthdate"}
            </button>
            {showCalendar && (
              <DayPicker
                mode="single"
                selected={birthdate}
                onSelect={setBirthdate}
                required
              />
            )}
          </div>

          {/* Gender Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Gender
            </label>
            <Input
              type="text"
              placeholder="Enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full py-2 text-slate-600 border rounded-lg"
            />
            {gender && (
              <p className="mt-2 text-sm text-gray-500">
                <strong>Selected Gender:</strong> {gender}
              </p>
            )}
          </div>

          {/* Location Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Location
            </label>
            <Input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full py-2 text-slate-600 border rounded-lg"
            />
            {location && (
              <p className="mt-2 text-sm text-gray-500">
                <strong>Selected Location:</strong> {location}
              </p>
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
