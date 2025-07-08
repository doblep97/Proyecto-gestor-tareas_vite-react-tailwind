import { useState } from "react";

const TaskCreate = ({createNewTask}) => {
    const [title, setTitle]=useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!title.trim()){
            return setTitle('')
        }
        
        createNewTask(title);
        setTitle('')
    }

    return(
        <form onSubmit={handleSubmit} action="" className="bg-white text-black border-none rounded py-3 px-3 flex items-center gap-3 mb-4">
            <span className="rounded-full border-2 inline-block h-5 w-5 border-gray-400"></span>
            <input 
              type="text"
              placeholder="Título de la tarea"
              name="title"
              value={title}
              className="w-full outline-none text-gray-400"
              onChange={(e) => setTitle(e.target.value)}
            />         
        </form>
    )
}

export default TaskCreate;