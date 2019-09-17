import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { filter, clear } from '../actions/todos'

export default function() {

    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todosReducer)
    const { name, sort, status } = useSelector(state => state.filterReducer)

    const handleOnChange = ({target}) => {
        const keyword = {
            name: target.name === 'name' ? target.value : name,
            sort: target.name === 'sort' ? target.value : sort,
            status: target.name === 'status' ? target.value : status
        }
        dispatch(filter(keyword))
    }
    
    const count = todos.filter(todo => todo.isCompleted === false).length
    const itemCountLabel = (count === 1 | count === 0) ? 'item' : 'items'
    
        return (
                todos.length !== 0 &&
                <div>
                    <div className='filter1'>
                        <input 
                            type="text" 
                            className="formcontrol1" 
                            placeholder="Find something" 
                            name="name" 
                            onChange={handleOnChange}
                        />
                        <div className='sort'>Sort by</div>
                        <select className="form1" name="sort" onChange={handleOnChange}>
                            <option value='latest'>Latest</option>
                            <option value='oldest'>Oldest</option>
                            <option value='az'>A - z</option>
                            <option value='za'>z - A</option>
                        </select>
                    </div>
                    <div className='footer'>
                        <p className="itemleft"> {`${count} ${itemCountLabel} left`} </p>
                        <div className="filter">
                            <div>
                                <input type='radio' value='all' checked={status === 'all'} name='status' id='radio1' onChange={handleOnChange}/>
                                <label className='ex1' htmlFor='radio1'>All</label>
                            </div>
                            <div>
                                <input type='radio' value='active' checked={status === 'active'} name='status' id='radio2' onChange={handleOnChange}/>
                                <label className='ex1' htmlFor='radio2'>Active</label>
                            </div>
                            <div>
                                <input type='radio' value='completed' checked={status === 'completed'} name='status' id='radio3' onChange={handleOnChange}/>
                                <label className='ex1' htmlFor='radio3'>Completed</label>
                            </div>
                            <div 
                                className="mo1"
                                onClick={() => { if(window.confirm('Delete all item?')) {
                                                dispatch(clear())
                                }}}
                            >Clear All</div> 
                        </div>      
                    </div>
                </div>
    )
}