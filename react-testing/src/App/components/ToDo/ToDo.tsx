import { ToDo as ToDoType } from "common/dist/types";
import { FC, useState } from "react";

type ToDoProps = ToDoType;

export const ToDo: FC<ToDoProps> = ({ completed, todo }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  return (
    <div
      className={`todo ${isCompleted ? "todo--checked" : ""}`}
      onClick={() => setIsCompleted(!isCompleted)}
    >
      <p className="todo__title">{todo}</p>
    </div>
  );
};
