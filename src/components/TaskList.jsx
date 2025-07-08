import TaskItem from "./TaskItem";

const TaskList = ({tasks, removeTask, updateTask}) => {
  return(
    <>
      {
        tasks.map(task => (
          <TaskItem key={task.id} task={task} removeTask= {removeTask} updateTask = {updateTask}/>
        ))
      }
    </>
  )
}

export default TaskList;