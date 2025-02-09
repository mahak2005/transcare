"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
// import { Badge } from "@/components/ui/badge"
interface BadgeProps {
    variant: string;
    children: React.ReactNode; // Add the children property
  }
  
  const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
    return (
      <span className={`badge badge-${variant}`}>
        {children}
      </span>
    );
  };
  
  export default Badge;
export function NotesPage() {
  const [notes, setNotes] = useState<{ id: number; text: string; status: string }[]>([])
  const [newNote, setNewNote] = useState("")

  // Add new note
  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      const newEntry = { id: Date.now(), text: newNote, status: "Pending" }
      setNotes([...notes, newEntry])
      setNewNote("")
    }
  }

  // Toggle note status
  const toggleStatus = (id: number) => {
    setNotes(
      notes.map(note =>
        note.id === id
          ? { ...note, status: note.status === "Pending" ? "Done" : "Pending" }
          : note
      )
    )
  }

  // Delete note
  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Sticky Notes</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">ADD</Button>
            </DialogTrigger>
            <DialogContent>
              <h3 className="text-lg font-semibold mb-2">Add New Note</h3>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Write something about your surgery or any note..."
                className="w-full py-2 px-3 border rounded-lg h-24"
              ></textarea>
              <Button className="mt-3 w-full" onClick={handleAddNote}>
                Save Note
              </Button>
            </DialogContent>
          </Dialog>
        </div>

        {/* Display Notes */}
        {notes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map(note => (
              <div key={note.id} className={`p-4 rounded-lg shadow-sm relative ${note.status === "Done" ? "bg-green-100" : "bg-yellow-100"}`}>
                <p>{note.text}</p>
                <div className="flex justify-between items-center mt-3">
                  <Badge variant={note.status === "Done" ? "success" : "warning"}>{note.status}</Badge>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline" onClick={() => toggleStatus(note.id)}>
                      {note.status === "Pending" ? "Mark as Done" : "Mark as Pending"}
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => deleteNote(note.id)}>
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No notes added yet.</p>
        )}
      </motion.section>
    </div>
  )
}
