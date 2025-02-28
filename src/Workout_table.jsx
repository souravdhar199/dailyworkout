import React, { useState } from 'react';
import { CgGym, CgMonday } from 'react-icons/cg';
import { FaPlayCircle, FaDumbbell } from 'react-icons/fa'; // Importing additional icons for enhanced design
import { GiBatteryMinus } from 'react-icons/gi';

const convertToEmbed = (url) => {
  const urlObj = new URL(url);
  const videoId = urlObj.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
};

const WorkoutTable = ({ workoutsGroup = [] }) => {
  const [videoUrl, setVideoUrl] = useState(null);

  if (!workoutsGroup.length) {
    return <p>No workouts data available.</p>;
  }

  return (
    <div>
      {workoutsGroup.map((workouts, groupIndex) => (
        <div key={groupIndex} className="container">
          <h1><GiBatteryMinus /> Workout Plan {groupIndex + 1}</h1>
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
                {workouts.map((workout, index) => (
                  <tr key={index}>
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
