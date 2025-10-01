import { type FormEvent, useRef } from "react";
import { type GoalData } from "../App";

type NewGoalProps = {
  onAddGoal: (data: GoalData) => void;
};

const NewGoal = (props: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  const handleSubmitGoal = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      title: goalRef.current!.value,
      description: summaryRef.current!.value,
    };
    props.onAddGoal(data);
    goalRef.current!.value = "";
    summaryRef.current!.value = "";
  };
  return (
    <form onSubmit={handleSubmitGoal}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
