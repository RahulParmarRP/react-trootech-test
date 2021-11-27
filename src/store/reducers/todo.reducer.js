import todos from '../../__mock__/todos.json'

const initialState = {
    todos: [...todos],

    userName: '',
    id: '',
    gender: '',
    hobby: [],
    age: 18,
    date: new Date(),
    status: false,
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TODO': {
            const { id, title } = action.payload
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            title
                        }
                    }
                    return todo
                })
            }
        }

        case 'DELETE_TODO': {
            debugger
            const deleteTodoId = action.payload
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== deleteTodoId)
            }
        }

        default:
            return state
    }
}
