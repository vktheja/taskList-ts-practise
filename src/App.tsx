import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";

import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = () => {
    const newGoal: CourseGoals = {
      id: Math.random(),
      title: "Learn React + TS",
      description: "Learn it in depth",
    };
    setGoals((prevState) => [...prevState, newGoal]);
  };

  const handleDeleteTask = (id: number) => {
    const newTaskList = goals.filter((goal) => goal.id != id);
    setGoals(newTaskList);
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteTask={handleDeleteTask} />
    </main>
  );
};

export default App;
