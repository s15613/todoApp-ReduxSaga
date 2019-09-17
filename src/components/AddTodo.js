import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../actions/todos'

export default function() {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    const dispatch = useDispatch()

    const  onTextSubmit = (e) => {
        if (e.key === 'Enter') {
            dispatch(addTodo(e.target.value))
            e.target.value = ''
        }
    }

        return (
            <input
                ref={inputRef}
                className="new-todo" 
                placeholder="What needs to be done?" 
                onKeyPress={onTextSubmit}
            />
        )
}