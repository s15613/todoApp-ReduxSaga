import * as TYPE from '../constants'
  
const initialState = {
    show: false,
    editTodo: {
        _id: '',
        title: '',
        isCompleted: false
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE.EDIT:
            return {
                ...state,
                show: true,
                editTodo: action.payload
                }
        
        case TYPE.HIDDEN:
        case TYPE.EDIT_CONFIRM:
            return {
                ...state,
                show: false,
                editTodo: {
                    _id: '',
                    title: '',
                    isCompleted: false
                }
            }
        default: 
            return state
    }
}