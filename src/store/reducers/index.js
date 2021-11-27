import { combineReducers } from 'redux'
import { todoReducer } from './todo.reducer'

export const rootReducer = combineReducers({
    todosData: todoReducer
})
export default rootReducer