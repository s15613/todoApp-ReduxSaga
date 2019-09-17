import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../actions/todos'
import Todo from './Todo'

export default function() {
    
    const dispatch =  useDispatch()
    const { loading, todos, error } = useSelector(state => state.todosReducer)
    const { name, sort, status } = useSelector(state => state.filterReducer)

    useEffect(() => { dispatch(getTodos()) },[dispatch])

        const filterdTodos = todos.filter(todo => todo.title.toLowerCase().indexOf(name.trim().toLowerCase()) !== -1)
        const sortedByStatus = filterdTodos.filter(todo => {
                                    if (status === 'active') return todo.isCompleted === false
                                    if (status === 'completed') return todo.isCompleted === true
                                    return true
                                })
        switch (sort) {
            case 'oldest':
                sortedByStatus.sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt));
                break;
            case 'az':
                sortedByStatus.sort((a,b) => a.title.localeCompare(b.title));
                break;
            case 'za':
                sortedByStatus.sort((a,b) => b.title.localeCompare(a.title));
                break;
            default:
                sortedByStatus.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
        }

        const el = error ? <p className='error'>Request errored</p> :
            <ul>
                {
                    sortedByStatus.map(todo => <Todo key={todo._id} todo={todo} />)
                }
            </ul>

        return (
            loading ? <p>Loading ...</p> : el
        )
}