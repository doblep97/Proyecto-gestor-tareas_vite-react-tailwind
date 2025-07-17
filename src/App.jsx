import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

const initialStateTask = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {
  const [tasksData, setTaskData] = useState(initialStateTask);

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasksData)),
    [tasksData]
  );

  const createNewTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTaskData([...tasksData, newTask]);
  };

  const removeTask = (id) => {
    setTaskData(tasksData.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    //Si el 'id' coincide con el de la tarea, cogemos la copia de la tarea y cambiamos el valor de completed, sino tendrá el mismo valor
    setTaskData(
      tasksData.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Cuenta cuantas tareas están pendientes
  const computedTasksLeft = tasksData.filter((task) => !task.completed).length;

  const removeAllTasksCompleted = () => {
    setTaskData(tasksData.filter((task) => !task.completed));
  };

  const [filter, setfilter] = useState("all");

  //Lo enviamos a las opciones de filtrada para que según el boton, se muestren unas u otras tareas
  const changeFilter = (filter) => setfilter(filter);

  //Dependiendo del estado (por defecto 'all'), apareceran unas u otras tareas
  const filterTasks = () => {
    switch (filter) {
      case "all":
        return tasksData;
      case "active":
        return tasksData.filter((task) => !task.completed);
      case "completed":
        return tasksData.filter((task) => task.completed);
      default:
        return tasksData;
    }
  };

  return (
    <>
      <div className=" dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain min-h-screen dark:bg-gray-900 bg-gray-300 pb-8">
        <Header />

        <main className="container mx-auto px-4 ">
          <TaskCreate createNewTask={createNewTask} />

          <div className="bg-white radius rounded-md mb-4 dark:bg-gray-600 dark:text-gray-400">
            {/*Pasamos como prop la funcion que marca que tareas han de visualizarse*/}
            <TaskList
              tasks={filterTasks()}
              removeTask={removeTask}
              updateTask={updateTask}
            />

            <TaskComputed
              computedTasksLeft={computedTasksLeft}
              removeAllTasksCompleted={removeAllTasksCompleted}
            />
          </div>

          <TaskFilter changeFilter={changeFilter} filter={filter} />
        </main>
      </div>
    </>
  );
};

export default App;
