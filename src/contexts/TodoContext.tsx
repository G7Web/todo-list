import { createContext, ReactNode, useReducer } from "react";
import { initialState, todoReducer } from "./reducers/todoReducer";
import { TodoActions, TodoState } from "../@types/TodoReducer";

type Props = {
    children?: ReactNode
}

type ContextType = {
    state: TodoState,
    dispatch: React.Dispatch<TodoActions>
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
})

export const TodoContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
