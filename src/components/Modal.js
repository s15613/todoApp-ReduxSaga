import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hidden, edit, editConfirm } from '../actions/todos'

export default function() {
    const dispatch = useDispatch()
    const txt = useRef()
    const { show, editTodo } = useSelector(state => state.modalReducer)

    useEffect(() => {
        show && txt.current.focus()
    },[show])

    const onHandleChange = ({target}) => {
        const newTodo = {
            ...editTodo,
            title: target.type !== 'checkbox' ? target.value : editTodo.title,
            isCompleted: target.type === 'checkbox' ? target.checked : editTodo.isCompleted
        }
        dispatch(edit(newTodo))
    }

    return (
            show && <div className='modal'>
                        <div className="modalcontent">
                            <div className="form23">
                                <input 
                                    ref={txt}
                                    type="text" 
                                    className="form13" 
                                    id="email" 
                                    value={editTodo.title}
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div className="formcheck">
                                <label>
                                <input 
                                    type="checkbox" 
                                    checked={editTodo.isCompleted}
                                    onChange={onHandleChange}
                                /> is Completed
                                </label>
                            </div>
                            <button 
                                className="btn1"
                                onClick={() => dispatch(editConfirm(editTodo))}
                            >Okay</button>
                            <button className="btn2" onClick={() => dispatch(hidden())}>Cancel</button>

                        </div>
                    </div>
        )
}