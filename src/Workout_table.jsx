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

  return (
    <div>
      {workoutsData.map((workoutPlan, index) => (
        <div key={index} className="container">
          {/* Dynamic Title from JSON */}
          <h1>{workoutPlan.title}</h1>
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
                {workoutPlan.workouts.map((workout, idx) => (
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
      ))}
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
