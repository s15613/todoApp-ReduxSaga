import * as TYPE from '../constants'
  
const initialState = {
    loading: true,
    todos: [],
    error: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE.GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        
        case TYPE.GET_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }

        case TYPE.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }

        case TYPE.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload._id)
            }

        case TYPE.CLEAR:
            return {
                ...state,
                todos: []
            }

        case TYPE.COMPLETE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id)
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                    return todo
                })
            }
        
        case TYPE.EDIT_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id)
                    return action.payload
                    return todo
                })
            }

        default: 
            return state
    }
}