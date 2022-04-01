import {createContext,useReducer} from 'react'
import contactsReducer from '../Reducers/contacsReducer'
export const ContactsContext = createContext([])

const GeneralProvider = ({children}) =>{
    const [allContacs, dispatch] = useReducer(contactsReducer,[])
    const data={
        allContacs:allContacs,
        dispatch:dispatch
    }
    return(
        <ContactsContext.Provider value={data}>
            {children}
        </ContactsContext.Provider>
    )
}

export default GeneralProvider

