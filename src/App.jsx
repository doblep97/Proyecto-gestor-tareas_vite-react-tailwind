import CrossIcon from "./components/icons/CrossIcon"
import MoonIcon from "./components/icons/MoonIcon"


const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-300 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain">
        
        <header className="container mx-auto px-4 py-8 flex flex-col gap-6">
          <div className="flex justify-between ">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.7rem]">tareas</h1>
            <button><MoonIcon/></button>
          </div>
        </header>

        <main className="container mx-auto px-4 mb-8">

          {/*TaskCreate*/}
          <form action=""className="bg-white text-black border-none rounded py-3 px-3 flex items-center gap-3 mb-4">
            <span className="rounded-full border-2 inline-block h-5 w-5 border-gray-400"></span>
            <input 
              type="text"
              placeholder="Título de la tarea"
              name="title"
              className="w-full outline-none text-gray-400"
            />         
          </form>

          {/*TaskList(taskItem) - TaskUpdate & TaskDelete*/}
          <div className="bg-white radius rounded-md mb-4">

            <article className="flex justify-between border-b border-gray-400 p-5">
              <div className="flex gap-2 items-center">
                <button className="rounded-full border-2 inline-block h-5 w-5 border-gray-400"></button>
                <p>Completar el curso de JS</p>
              </div>
              <button><CrossIcon/></button>
            </article>

            <article className="flex justify-between border-b border-gray-400 p-5">
              <div className="flex gap-2 items-center">
                <button className="rounded-full border-2 inline-block h-5 w-5 border-gray-400"></button>
                <p>Completar el curso de CSS</p>
              </div>
              <button><CrossIcon/></button>
            </article>

            <article className="flex justify-between border-b border-gray-400 p-5">
              <div className="flex gap-2 items-center">
                <button className="rounded-full border-2 inline-block h-5 w-5 border-gray-400"></button>
                <p>Completar el curso de HTML</p>
              </div>
              <button><CrossIcon/></button>
            </article>

            {/*TaskComputed*/}
            <section className="p-5 text-gray-400 flex justify-between text-xs">
              <span>5 tareas pendientes</span>
              <button>Eliminar tareas completadas</button>
            </section>

          </div>

            {/*Taskfilter*/}
          <section className="container mx-auto radius rounded-mds">
            <div className=" bg-white radius rounded-md flex justify-center gap-7 text-gray-400">
              <button className="inline-block py-5 text-blue-700">Todas</button>
              <button className="inline-block py-5 hover:text-blue-700">Pendientes</button>
              <button className="inline-block py-5 hover:text-blue-700">Completadas</button>   
            </div>
          </section>

        </main>


      </div>

    </>
  )
}

export default App
