import { useContext } from 'react'
import styles from './TodoList.module.css'
import { TodoContext } from '../../contexts/TodoContext'
import { TodoItem } from '../TodoItem'
import EmptyIcon from '../../assets/clipboard.svg?react'

export const TodoList = () => {
    const { state: todos } = useContext(TodoContext)

    return (
        <div className={styles.container}>
            <div className={styles.infoTasksContainer}>
                <span className={styles.infoDoneTasks}>Concluídas</span>

                <div className={styles.infoCountDoneTasks}>
                    2 de 8
                </div>
            </div>

            {todos.length < 1 &&
                <div className={styles.emptyContainer}>
                    <EmptyIcon />

                    <p className={styles.emptyLabel}>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <br />
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            }

            <div className={styles.tasksContainer}>
                {todos.map((data, key) => (
                    <TodoItem
                        key={key}
                        data={data}
                    />
                ))}
            </div>
        </div>
    )
}