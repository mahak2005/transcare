"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface MoodEntry {
  date: string;
  mood: number;
}

export default function MoodTracker() {
  const [mood, setMood] = useState<number>(5);
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
      mood: mood,
    };
    const updatedHistory = [...moodHistory, newEntry];
    setMoodHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));
    setMood(5); // Reset mood to neutral after submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Mood Input Section */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-800">Mood Tracker</CardTitle>
            <CardDescription className="text-center text-purple-600">
              Track your daily mood and see your progress over time
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
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Log Mood
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Mood History Chart */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-purple-800">Your Mood History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodHistory}>
                  <XAxis dataKey="date" tickFormatter={(date: string) => date.split("-").slice(1).join("/")} />
                  <YAxis domain={[1, 10]} />
                  <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", padding: "10px" }} />
                  <Line type="monotone" dataKey="mood" stroke="#6B46C1" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
