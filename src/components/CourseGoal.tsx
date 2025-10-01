import { type PropsWithChildren } from "react";

// for accesing chilren we can use the generic PropsWithChildren type

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

const CourseGoal = (props: CourseGoalProps) => {
  const { title, children, id } = props;

  const handleDeleteTask = (id: number) => {
    props.onDelete(id);
  };

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button type="button" onClick={() => handleDeleteTask(id)}>
        DELETE
      </button>
    </article>
  );
};

export default CourseGoal;
