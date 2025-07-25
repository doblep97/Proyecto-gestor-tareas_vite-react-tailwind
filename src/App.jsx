import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import { DragDropContext } from "@hello-pangea/dnd";

const initialStateTask = JSON.parse(localStorage.getItem("tasks")) || [];

const reorderTasks = (previousListTasks, startIndex, endIndex) => {
  //copia de la lista
  const resultFinal = [...previousListTasks];
  //Selecciono el item que se ha arrastado
  const [taskReorder] = resultFinal.splice(startIndex, 1);
  //Añado ese item en la posicion que lo ha soltado
  resultFinal.splice(endIndex, 0, taskReorder);
  //Devolvemos el nuevo orden de las tareas
  return resultFinal;
};

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
  //Funcion que maneja el drag & drop
  const handleDragEnd = (result) => {
    //'result' contiene la información sobre dónde se arrastró el elemento y dónde se soltó
    // source: posición original (antes de mover)
    // destination: posición final (donde se soltó)
    const { destination, source } = result;

    if (!destination) return; //si se soltó fuera de una zona válida, no se hace nada.

    //Si el usuario suelta el elemento en la misma posición donde estaba, no se reordena nada y salimos de la función.
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return;
    }

    // Si el arrastre es válido y ha cambiado de posición, se actualiza el estado de tasksData
    setTaskData(
      (
        previousListTasks //'previousListTasks' captura el orden anterior de los items anterioes al arrastre del usuario (como si fuera un 'event')
      ) => reorderTasks(previousListTasks, source.index, destination.index) //Envío la informacion a la función
    );
  };

  return (
    <>
      <div
        className=" 
          dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] 
          bg-[url(./assets/images/bg-mobile-light.jpg)] 
          md:bg-[url(./assets/images/bg-desktop-light.jpg)]
          dark:md:bg-[url(./assets/images/bg-desktop-dark.jpg)]
          bg-no-repeat 
          bg-contain min-h-screen 
          dark:bg-gray-900 
          bg-gray-300 pb-8"
      >
        <main className="container mx-auto px-4 md:max-w-xl">
          <Header />

          <TaskCreate createNewTask={createNewTask} />

          <div className="bg-white radius rounded-md mb-4 dark:bg-gray-600 dark:text-gray-400">
            {/*Pasamos como prop la funcion que marca que tareas han de visualizarse*/}
            <DragDropContext onDragEnd={handleDragEnd}>
              <TaskList
                tasks={filterTasks()}
                removeTask={removeTask}
                updateTask={updateTask}
              />
            </DragDropContext>

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
