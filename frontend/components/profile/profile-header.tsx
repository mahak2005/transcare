// "use client"
// import React from "react";

// import { motion } from "framer-motion"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export function ProfileHeader() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="relative h-48 bg-gradient-to-r from-teal-900 to-emerald-900"
//     >
//       <div className="absolute -bottom-16 left-8 flex items-end gap-4">
//         <div className="relative">
//           <div className="h-32 w-32 rounded-full border-4 border-white bg-white overflow-hidden">
//             <Image
//               src="/placeholder.svg?height=128&width=128"
//               alt="Profile"
//               width={128}
//               height={128}
//               className="object-cover"
//             />
//           </div>
//         </div>
//         <div className="mb-4 text-white">
//           <h1 className="text-2xl font-bold">Mahak Mahak</h1>
//           <div className="flex items-center gap-2">
//             <span className="inline-block px-2 py-1 text-xs bg-pink-500 rounded-full">Athlete</span>
//             <span className="text-sm">Taekwondo</span>
//           </div>
//         </div>
//       </div>
//       <div className="absolute right-4 bottom-4">
//         <Button variant="secondary">EDIT</Button>
//       </div>
//     </motion.div>
//   )
// }
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-48 bg-gradient-to-r from-teal-900 to-emerald-900"
    >
      {/* Move image slightly up */}
      <div className="absolute -bottom-20 left-8 flex items-end gap-4">
        
        <div className="mb-4 text-white">
          <h1 className="text-2xl font-bold">Mahak Mahak</h1>
          <span className="text-sm">Taekwondo</span>
        </div>
      </div>

      <div className="absolute right-4 bottom-4">
        <Button variant="secondary">EDIT</Button>
      </div>
    </motion.div>
  );
}
