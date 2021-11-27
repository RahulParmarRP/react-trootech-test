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
    first_name: '',
    last_name: '',
    node: {},
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST': {
            const { email, first_name, last_name } = action.payload
            return {
                ...state,
                email,
                first_name,
                last_name,
            }
        }



        default:
            return state
    }
}
