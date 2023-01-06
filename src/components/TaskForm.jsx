import {useState, useContext} from 'react'
import { TaskContext } from '../context/TaskContext'

// El formulario reinicia por defecto el navegador

function TaskForm(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault() // Ignora el comportamiento de refrescar continuamente
        createTask({
            title,
            description
        })
        setTitle("")//Limpia el hook luego de enviar
        setDescription("")//Limpia el hook luego de enviar
    }
    return(
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input  placeholder="Escribe tu tarea" 
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title} //Limpiar luego de enviar
                    className='bg-slate-300 p-3 w-full mb-2'
                    autoFocus
                />
                <textarea placeholder="Escribe la descripcion de la tarea" 
                    onChange={(e)=>setDescription(e.target.value)}
                    value={description} //Limpiar luego de enviar
                    className='bg-slate-300 p-3 w-full mb-2'
                >
                </textarea>
                <button className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400'>Guardar</button>
        </form>
        </div>
    )
}

export default TaskForm;