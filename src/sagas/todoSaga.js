import { put, takeLatest, delay } from 'redux-saga/effects'
import * as type from '../constants'
import * as todoActions from '../actions/todos'
import axios from 'axios'

axios.defaults.baseURL = 'https://todoappofapiserver.herokuapp.com/api/todos'

function* getTodos() {
    try {
        const res = yield axios.get('/')
        yield delay(300)
        yield put(todoActions.getTodosSuccess(res.data))
    } catch (error) {
        yield delay(300)
        yield put(todoActions.getTodosFailure())
    }
}

function* addTodo({payload}) {
    try {
        const res = yield axios.post('/', { title: payload })
        yield put(todoActions.addTodoSuccess(res.data))
    } catch (error) {
        // do nothing
    }
}

function* deleteTodo({payload}) {
    try {
        const res = yield axios.post(`/${payload}`)
        yield put(todoActions.deleteTodoSuccess(res.data))
    } catch (error) {
        // do nothing
    }
}

function* completeTodo({payload}) {
    try {
        const res = yield axios.post(`/${payload}/complete`)
        yield put(todoActions.completeTodoSuccess(res.data))
    } catch (error) {
        // do nothing
    }
}

function* clear() {
    try {
        yield axios.get('/delete/all')
        yield put(todoActions.clearSuccess())
    } catch (error) {

    }
}

function* edit({payload}) {
    const data = {
        title: payload.title,
        isCompleted: payload.isCompleted
    }
    try {
        const res = yield axios.post(`/${payload._id}/edit`, data)
        yield put(todoActions.editSuccess(res.data))
    } catch (error) {

    }
}

export default function*() {
    yield takeLatest(type.GET_TODOS, getTodos);
    yield takeLatest(type.ADD_TODO, addTodo);
    yield takeLatest(type.DELETE_TODO, deleteTodo);
    yield takeLatest(type.COMPLETE_TODO, completeTodo);
    yield takeLatest(type.CLEAR, clear);
    yield takeLatest(type.EDIT_CONFIRM, edit);
}