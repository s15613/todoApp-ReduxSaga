import * as TYPE from '../constants'

export const getTodos = () => {
    return {
        type: TYPE.GET_TODOS
    }
}

export const getTodosSuccess = data => {
    return {
        type: TYPE.GET_TODOS_SUCCESS,
        payload: data
    }
}

export const getTodosFailure = () => {
    return {
        type: TYPE.GET_TODOS_FAILURE
    }
}

export const addTodo = title => {
    return {
        type: TYPE.ADD_TODO,
        payload: title
    }
}

export const addTodoSuccess = data => {
    return {
        type: TYPE.ADD_TODO_SUCCESS,
        payload: data
    }
}

export const deleteTodo = todoId => {
    return {
        type: TYPE.DELETE_TODO,
        payload: todoId
    }
}

export const deleteTodoSuccess = data => {
    return {
        type: TYPE.DELETE_TODO_SUCCESS,
        payload: data
    }
}

export const completeTodo = todoId => {
    return {
        type: TYPE.COMPLETE_TODO,
        payload: todoId
    }
}

export const completeTodoSuccess = data => {
    return {
        type: TYPE.COMPLETE_TODO_SUCCESS,
        payload: data
    }
}

export const filter = keyword => {
    return {
        type: TYPE.FILTER,
        payload: keyword
    }
}

export const clear = () => {
    return {
        type: TYPE.CLEAR,
    }
}

export const clearSuccess = () => {
    return {
        type: TYPE.CLEAR_SUCCESS
    }
}

export const edit = todo => {
    return {
        type: TYPE.EDIT,
        payload: todo
    }
}

export const editConfirm = data => {
    return {
        type: TYPE.EDIT_CONFIRM,
        payload: data
    }
}

export const editSuccess = data => {
    return {
        type: TYPE.EDIT_SUCCESS,
        payload: data
    }
}

export const hidden = () => {
    return {
        type: TYPE.HIDDEN
    }
}