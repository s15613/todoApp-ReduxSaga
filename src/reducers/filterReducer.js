import * as TYPE from '../constants'
  
const initialState = {
    name: '',
    sort: 'latest',
    status: 'all'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE.FILTER:
            return action.payload

        default: 
            return state
    }
}