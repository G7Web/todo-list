import { useContext, useEffect } from "react"
import { TodoContext  } from "./contexts/TodoContext"

const App = () => {
    const { state: todos, dispatch } = useContext(TodoContext)

    const handleAdd = () => {
        dispatch({ type: 'ADD', payload: { title: 'Nova', isDone: false } })
    }

    const handleEdit = () => {
        dispatch({ type: 'CHANGE', payload: { title: 'Nova EDITADA', isDone: true, index: 0 } })
    }

    const handleDelete = () => {
        dispatch({ type: 'DELETE', payload: { index: 0 } })
    }

    useEffect(() => {
        console.log('Tarefas atuais: ', todos)
    }, [todos])

    return (
        <>
            <button onClick={handleAdd}>Adicionar todo</button> 
            <button onClick={handleEdit}>Editar todo</button>
            <button onClick={handleDelete}>Remover todo</button>
        </>
    )
}

export default App;