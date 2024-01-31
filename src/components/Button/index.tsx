import styles from './Button.module.css'

type Props = {
    onClick: () => void
}

export const Button = ({ onClick }: Props) => {
    return (
        <div className={styles.container}>
            <button onClick={onClick}>
                Criar
                <img src='/icons/add.svg' />
            </button>
        </div>
    )
}