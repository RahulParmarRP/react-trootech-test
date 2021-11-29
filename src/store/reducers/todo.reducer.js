import todos from '../../__mock__/todos.json'
import { generateId } from '../../utils'
const initialState = {
  todos: [...todos],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.payload,
            id: generateId(),
            guid: generateId()
          }
        ]
      }
    }

    case 'UPDATE_TODO': {
      const {
        id,
        status,
        age,
        hobby,
        title,
        username,
        gender,
        date,
      } = action.payload
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              status,
              age,
              hobby,
              title,
              username,
              gender,
              date,
            }
          }
          return todo
        }),
      }
    }

    case 'DELETE_TODO': {
      const deleteTodoId = action.payload
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== deleteTodoId),
      }
    }

    default:
      return state
  }
}
