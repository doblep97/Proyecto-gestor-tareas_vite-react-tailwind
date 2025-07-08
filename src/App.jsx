import { useState } from "react"
import Header from "./components/Header"
import TaskComputed from "./components/TaskComputed"
import TaskCreate from "./components/TaskCreate"
import TaskFilter from "./components/TaskFilter"
import TaskList from "./components/TaskList"

const initialStateTask=[
  {id: 1, title: "Ir al gym", completed: false},
  {id: 2, title: "Poner la lavadora", completed: true},
  {id: 3, title: "Recoger la casa", completed: false},
  {id: 4, title: "Hacer la clase de JS", completed: true},
]

const App = () => {

  const [tasksData, setTaskData] = useState(initialStateTask)

  const createNewTask = (title) => {

    const newTask = {
      id:Date.now(), 
      title, 
      completed:false}
      
    setTaskData([...tasksData, newTask])
  }

  const removeTask = (id) => {
    setTaskData(tasksData.filter(task => (task.id !== id)))
  }

  const updateTask = (id) => {
    //Si el 'id' coincide con el de la tarea, cogemos la copia de la tarea y cambiamos el valor de completed, sino tendrá el mismo valor
    setTaskData(tasksData.map(task => ( task.id === id ? {...task, completed : !task.completed} : task )))
  }

  //Cuenta cuantas tareas están pendientes
  const computedTasksLeft = tasksData.filter(task => !task.completed).length

  const removeAllTasksCompleted = () => {
    setTaskData(tasksData.filter(task => (!task.completed)))
    
  }
  return (
    <>
      <div className=" bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain">
        
        <Header/>

        <main className="container mx-auto px-4 mb-8">

          <TaskCreate createNewTask={createNewTask}/>

          <div className="bg-white radius rounded-md mb-4">
            {/*TaskList(taskItem) - TaskUpdate & TaskDelete*/}
            <TaskList 
              tasks={tasksData} 
              removeTask= {removeTask} 
              updateTask = {updateTask}
            />

            <TaskComputed computedTasksLeft={computedTasksLeft} removeAllTasksCompleted={removeAllTasksCompleted}/>

          </div>

          <TaskFilter/>

        </main>

      </div>
    </>
  )
}

export default App
