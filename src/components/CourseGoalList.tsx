import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoals } from "../App";
import InfoBox from "./InfoBox.tsx";

type GoalProps = {
  goals: CourseGoals[];
  onDeleteTask: (id: number) => void;
};

const CourseGoalList = (props: GoalProps) => {
  const { goals } = props;

  const deleteTask = (id: number) => {
    props.onDeleteTask(id);
  };

  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no goals yet</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You are putting too much pressure on yourself
      </InfoBox>
    );
  }

  const displayGoals = goals.map((goal) => (
    <li key={goal.id}>
      <CourseGoal title={goal.title} id={goal.id} onDelete={deleteTask}>
        <p>{goal.description}</p>
      </CourseGoal>
    </li>
  ));

  return (
    <>
      {warningBox}
      <ul>{displayGoals}</ul>
    </>
  );
};

export default CourseGoalList;
