"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

interface MoodEntry {
  date: string;
  mood: number;
  stress: number;
  energy: number;
  note: string;
}

export default function MoodTracker() {
  const [mood, setMood] = useState<number>(5);
  const [stress, setStress] = useState<number>(5);
  const [energy, setEnergy] = useState<number>(5);
  const [note, setNote] = useState<string>("");
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const storedMoodHistory = localStorage.getItem("moodHistory");
    if (storedMoodHistory) {
      setMoodHistory(JSON.parse(storedMoodHistory));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: MoodEntry = {
      date: new Date().toISOString().split("T")[0],
      mood,
      stress,
      energy,
      note,
    };
    const updatedHistory = [...moodHistory, newEntry];
    setMoodHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));
    setMood(5);
    setStress(5);
    setEnergy(5);
    setNote("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mood Input Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-800">
              Mood Tracker
            </CardTitle>
            <CardDescription className="text-center text-purple-600">
              Track your daily mood, stress, and energy levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mood" className="text-lg font-medium text-purple-700">
                  How are you feeling today? (1-10)
                </Label>
                <Input
                  id="mood"
                  type="number"
                  min="1"
                  max="10"
                  value={mood}
                  onChange={(e) => setMood(Number(e.target.value))}
                  className="text-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stress" className="text-lg font-medium text-purple-700">
                  Stress Level (1-10)
                </Label>
                <Input
                  id="stress"
                  type="number"
                  min="1"
                  max="10"
                  value={stress}
                  onChange={(e) => setStress(Number(e.target.value))}
                  className="text-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="energy" className="text-lg font-medium text-purple-700">
                  Energy Level (1-10)
                </Label>
                <Input
                  id="energy"
                  type="number"
                  min="1"
                  max="10"
                  value={energy}
                  onChange={(e) => setEnergy(Number(e.target.value))}
                  className="text-lg"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="note" className="text-lg font-medium text-purple-700">
                  Add a note (optional)
                </Label>
                <Input
                  id="note"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Log Mood
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Mood History Chart */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-800">
              Your Mood History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodHistory}>
                  <XAxis dataKey="date" tickFormatter={(date: string) => date.split("-").slice(1).join("/")} />
                  <YAxis domain={[1, 10]} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", padding: "10px" }} />
                  <Legend />
                  <Line type="monotone" dataKey="mood" stroke="#6B46C1" strokeWidth={2} dot={{ r: 4 }} name="Mood" />
                  <Line type="monotone" dataKey="stress" stroke="#E53E3E" strokeWidth={2} dot={{ r: 4 }} name="Stress" />
                  <Line type="monotone" dataKey="energy" stroke="#38A169" strokeWidth={2} dot={{ r: 4 }} name="Energy" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
