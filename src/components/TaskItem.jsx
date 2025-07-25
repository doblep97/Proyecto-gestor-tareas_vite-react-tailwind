import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";
import React from "react";

const TaskItem = React.forwardRef(
  ({ task, removeTask, updateTask, ...props }, ref) => {
    const { id, title, completed } = task;

    return (
      <article
        ref={ref}
        {...props}
        className="flex justify-between border-b border-gray-400  p-5"
      >
        <div className="flex gap-2 items-center">
          <button
            onClick={() => {
              updateTask(id);
            }}
            className={`${completed ? "rounded-full border-2 h-5 w-5 border-gray-400 bg-linear-65 from-purple-500 to-pink-500 flex justify-center items-center" : "rounded-full border-2 inline-block h-5 w-5 border-gray-400"}`}
          >
            {completed && <IconCheck />}
            {/*Si la tarea está completada pintará el icono */}
          </button>
          <p className={`${completed && "line-through"}`}>{title}</p>
        </div>
        <button onClick={() => removeTask(id)}>
          <IconCross />
        </button>
      </article>
    );
  }
);

export default TaskItem;
