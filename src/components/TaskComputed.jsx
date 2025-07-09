const TaskComputed = ({computedTasksLeft, removeAllTasksCompleted}) => {
    return(
        <section className="p-5 text-gray-400 flex justify-between text-xs dark:bg-gray-600">
            <span>{computedTasksLeft} tareas pendientes</span>
            <button className="hover:text-blue-700"onClick={removeAllTasksCompleted}>Eliminar tareas completadas</button>
        </section>
    )
}

export default TaskComputed;