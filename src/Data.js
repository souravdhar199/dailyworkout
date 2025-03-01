const workoutsData = [
  {
    title: "Monday",
    restDay: true,
    workouts: []
  },
  {
    title: "Tuesday",
    workouts: [
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
    ],
  },
  {
    title: "Wednesday",
    workouts: [
      {
        name: "Tricep Pushdown",
        video: "https://www.youtube.com/watch?v=tricep-pushdown",
        reps: "3x10-15",
      }
    ],
  },
  {
    title: "Thursday",
    restDay: true,
    workouts: []
  },
  {
    title: "Friday",
    workouts: [
      {
        name: "Bicep Curls",
        video: "https://www.youtube.com/watch?v=bicep-curls",
        reps: "4x10",
      },
      {
        name: "Hammer Curls",
        video: "https://www.youtube.com/watch?v=hammer-curls",
        reps: "4x10",
      }
    ],
  },
  {
    title: "Saturday",
    restDay: false,
    workouts: [
      {
        name: "Leg Press",
        video: "https://www.youtube.com/watch?v=leg-press",
        reps: "4x12",
      },
      {
        name: "Squat",
        video: "https://www.youtube.com/watch?v=squat",
        reps: "5x5",
      },
      {
        name: "Leg Press",
        video: "https://www.youtube.com/watch?v=leg-press",
        reps: "4x12",
      },
      {
        name: "Squat",
        video: "https://www.youtube.com/watch?v=squat",
        reps: "5x5",
      }
    ],
  },
  {
    title: "Sunday",
    restDay: true,
    workouts: []
  }
];

export default workoutsData;
