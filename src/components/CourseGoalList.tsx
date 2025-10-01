import CourseGoal from "./CourseGoal";
import { type CourseGoals } from "../App";

type GoalProps = {
  goals: CourseGoals[];
  onDeleteTask: (id: number) => void;
};

const CourseGoalList = (props: GoalProps) => {
  const { goals } = props;

  const deleteTask = (id: number) => {
    props.onDeleteTask(id);
  };

  const displayGoals = goals.map((goal) => (
    <li key={goal.id}>
      <CourseGoal title={goal.title} id={goal.id} onDelete={deleteTask}>
        <p>{goal.description}</p>
      </CourseGoal>
    </li>
  ));

  return <>{displayGoals}</>;
};

export default CourseGoalList;
