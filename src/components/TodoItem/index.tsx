import { Todo } from '../../@types/Todo';
import styles from './TodoItem.module.css';
import ReactComponent from '../../assets/trash.svg?react';

type Props = {
    data: Todo
}

export const TodoItem = ({ data }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.isDoneContainer}>
                <input
                    type='checkbox'
                    className={styles.isDoneInput}
                />
            </div>

            <div className={styles.taskTitleContainer}>
                {data.title}
            </div>

            <div className={styles.deleteTaskContainer}>
                <button className={styles.deleteTaskBtn}>
                    <ReactComponent />
                </button>
            </div>
        </div>
    )
}