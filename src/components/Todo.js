import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteTodo, completeTodo, edit } from '../actions/todos'

export default function({todo}) {
    
    const dispatch = useDispatch()

        return (
            <div className='cover'>
                <li onClick={() => dispatch(completeTodo(todo._id))}>
                    <i className={todo.isCompleted ? "fas fa-check-circle mi non" : "fas fa-check-circle mi"}></i>
                    <div className={todo.isCompleted ? "title done" : "title"}>{todo.title}</div>
                </li>
                <span 
                    className="close1"
                    onClick={() => dispatch(edit(todo))}
                >
                    Edit           
                </span>
                <span 
                    className="close"
                    onClick={() => dispatch(deleteTodo(todo._id))}
                >
                    &#10799;           
                </span>
            </div>
        )
}