const TaskFilter = () => {
    return(
        <section className="container mx-auto radius rounded-mds">
            <div className=" bg-white radius rounded-md flex justify-center gap-7 text-gray-400">
              <button className="inline-block py-5 text-blue-700">Todas</button>
              <button className="inline-block py-5 hover:text-blue-700">Pendientes</button>
              <button className="inline-block py-5 hover:text-blue-700">Completadas</button>   
            </div>
        </section>

    )
}

export default TaskFilter;