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
  {id: 4, title: "Hacer la clase de JS", completed: false},
]

const App = () => {

  const [tasksData, setTaskData] = useState(initialStateTask)

  return (
    <>
      <div className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain">
        
        <Header/>

        <main className="container mx-auto px-4 mb-8">

          <TaskCreate/>

          <div className="bg-white radius rounded-md mb-4">
            {/*TaskList(taskItem) - TaskUpdate & TaskDelete*/}
            <TaskList tasks={tasksData}/>

            <TaskComputed/>

          </div>

          <TaskFilter/>

        </main>

      </div>
    </>
  )
}

export default App
