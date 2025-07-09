const TaskFilter = ({changeFilter, filter}) => {
    return(
        <section className="container mx-auto radius rounded-mds ">
            <div className=" bg-white radius rounded-md flex justify-center gap-7 text-gray-400 dark:bg-gray-600">
                <button 
                    onClick={()=>changeFilter('all')} 
                    className = {`${filter === 'all' ? "inline-block py-5 text-blue-700" : "inline-block py-5 hover:text-blue-700"}`}>
                    Todas
                </button>
                <button 
                    onClick={()=>changeFilter('active')} 
                    className = {`${filter === 'active' ? " text-blue-700" : "inline-block py-5 hover:text-blue-700"}`}>
                    Pendientes
                </button>
                <button 
                    onClick={()=>changeFilter('completed')} 
                    className = {`${filter === 'completed' ? "inline-block py-5 text-blue-700" : "inline-block py-5 hover:text-blue-700"}`}>
                    Completadas
                </button>   
            </div>
        </section>

    )
}

export default TaskFilter;