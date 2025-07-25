import TaskItem from "./TaskItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TaskList = ({ tasks, removeTask, updateTask }) => {
  return (
    <Droppable droppableId="tasks">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} index={index} draggableId={`${task.id}`}>
              {(draggableProvider) => (
                <TaskItem
                  task={task}
                  removeTask={removeTask}
                  updateTask={updateTask}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.draggableProps}
                  {...draggableProvider.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
