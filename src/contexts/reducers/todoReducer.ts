import { TodoActions, TodoState } from "../../@types/TodoReducer"

export const initialState = []

export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {
    switch (action.type) {
        case 'SET_DEFAULT':
            return action.payload

        case 'ADD':
            return [...state, action.payload]

        case 'CHANGE':
            const changedTodos = state.map((item, key) => {
                if (key == action.payload.index) {
                    item.title = action.payload.title
                    item.isDone = action.payload.isDone
                }

                return item
            })

            return changedTodos
        
        case 'DELETE':
            return state.filter((_item, key) => key != action.payload.index)
        
        default:
            return state
    }
}