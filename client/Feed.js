import React, { useState, useEffect } from "react";
import WorkoutCard from "./WorkoutCard";

const Feed = ({ workoutsList }) => {
  // populate array with workout card components
  const workoutCards = [];
  workoutsList.forEach((workout, i) => {
    workoutCards.push(
      <WorkoutCard
        workoutContent={workout["workout_content"]}
        date={workout["date"]}
        athleteId={workout["athlete_id"]}
        athleteName={workout["athlete_name"]}
        key={workout["_id"]}
      ></WorkoutCard>
    );
  });

  return (
    <div id="feed" style={styles.container}>
      {workoutCards}
    </div>
  );
};

const styles = {
  container: {
    border: "1px black solid",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
};

export default Feed;
