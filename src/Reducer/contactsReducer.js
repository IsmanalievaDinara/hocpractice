import * as actions from './actions'
const contactsReducer = (state,action) =>{
    switch(action.type){
        case actions.ADDCONTACT:
            return [...state,action.payload]
        case actions.DELETECONTACT:
            return state.splice(0,1)
        default:
            return state
    }
}

export default contactsReducer
