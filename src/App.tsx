import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import NewGoal from "./components/NewGoal.tsx";

import goalsImg from "./assets/goals.jpg";

export type GoalData = {
  title: string;
  description: string;
};

export type CourseGoals = {
  title: string;
  description: string;
  id: number;
};

const App = () => {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = (data: GoalData) => {
    const { title, description } = data;
    const newGoal: CourseGoals = {
      id: Math.random(),
      title,
      description,
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
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteTask={handleDeleteTask} />
    </main>
  );
};

export default App;
