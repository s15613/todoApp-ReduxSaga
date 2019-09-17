import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import filterReducer from './filterReducer'
import modalReducer from './modalReducer'

export default combineReducers({
    todosReducer,
    filterReducer,
    modalReducer
})