import CrossIcon from './icons/CrossIcon'

const TaskItem = ({task}) => {

   const {id, title, completed} = task;
    
    return(
        <article className="flex justify-between border-b border-gray-400 p-5">
              <div className="flex gap-2 items-center">
                <button className="rounded-full border-2 inline-block h-5 w-5 border-gray-400"></button>
                {title}
              </div>
              <button><CrossIcon/></button>
        </article>
    )
}

export default TaskItem;