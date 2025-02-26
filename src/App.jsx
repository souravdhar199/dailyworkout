import React, { useState } from "react";

import { FaPlayCircle } from "react-icons/fa";
import "./App.css";

const workouts = [
  {
    name: "Hammer Mechine Chest Press",
    video:
      "https://www.youtube.com/watch?v=0Wa9CfRXUkA&ab_channel=RenaissancePeriodization",
    reps: "4x8",
  },
  {
    name: "Flat Machine Chest Press",
    video: "https://www.youtube.com/watch?v=flat-machine-chest-press",
    reps: "4x8",
  },
  {
    name: "Overhead Tricep Extensions",
    video: "https://www.youtube.com/watch?v=overhead-tricep-extensions",
    reps: "3x10-15",
  },
  {
    name: "Lateral Dumbbell Raises",
    video: "https://www.youtube.com/watch?v=lateral-dumbbell-raises",
    reps: "5x10-20",
  },
  {
    name: "Tricep Pushdown",
    video: "https://www.youtube.com/watch?v=tricep-pushdown",
    reps: "3x10-15",
  },
];
const convertToEmbed = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v"); // Extract video ID
  return `https://www.youtube.com/embed/${videoId}`;
};
const WorkoutTable = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Workout Plan</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Workout Name</th>
              <th className="p-2 border">Video</th>
              <th className="p-2 border">Reps</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, index) => (
              <tr key={index} className="text-center border">
                <td className="p-2 border">{workout.name}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => setVideoUrl(convertToEmbed(workout.video))}
                    className="text-blue-500 hover:text-blue-700 text-3xl"
                  >
                    <FaPlayCircle />
                  </button>
                </td>
                <td className="p-2 border">{workout.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg relative w-3/4 max-w-2xl">
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute top-2 right-2 text-red-500 text-2xl"
            >
              &times;
            </button>
            <iframe
              width="100%"
              height="400"
              src={videoUrl.replace("watch?v=", "embed/")}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>

    
  );
};

export default WorkoutTable;
