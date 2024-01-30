import { Todo } from "./Todo"

export type TodoState = Todo[]

type AddTodo = {
    type: 'ADD',
    payload: Todo
}

type ChangeTodo = {
    type: 'CHANGE',
    payload: Todo & { index: number }
}

type DeleteTodo = {
    type: 'DELETE',
    payload: { index: number }
}

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo