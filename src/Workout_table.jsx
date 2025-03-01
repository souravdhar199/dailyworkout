import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import workoutsData from './Data';

const convertToEmbed = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

const WorkoutTable = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const dayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' }).toLowerCase(); // Normalize day to lowercase
  const todayWorkout = workoutsData.find(workout => workout.title.toLowerCase() === dayOfWeek);

  // First check if there is a workout for today and if it's a rest day
  if (!todayWorkout || todayWorkout.restDay) {
    return <div>No Workout Today</div>;
  }

  // Since we have verified that it's not a rest day and data exists, we can safely map over workouts
  return (
    <div>
      <div className="container">
        <h1>{todayWorkout.title} Workout</h1>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Workout Name</th>
                <th>Video</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              {todayWorkout.workouts.map((workout, idx) => (
                <tr key={idx}>
                  <td>{workout.name}</td>
                  <td>
                    <button
                      onClick={() => setVideoUrl(convertToEmbed(workout.video))}
                      className="video-button"
                    >
                      <FaPlayCircle size={30} />
                    </button>
                  </td>
                  <td>{workout.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {videoUrl && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setVideoUrl(null)} className="close-button">&times;</button>
            <iframe width="100%" height="400" src={videoUrl} allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutTable;
