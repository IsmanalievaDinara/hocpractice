import React,{useContext} from 'react'
import {ContactsContext} from '../contex/GeneralContext'
import * as actions from '../Reducers/actions'
import withPagination from './withPaginations'
function Contacs({parcialContact,setPageNow,arrayButtons}) {
const {allContacs,dispatch} = useContext(ContactsContext)
  return (
    <>
    {
        parcialContact.map((contact)=>{
            return(<div key={contact.id}> {contact.nameInput} {contact.phone}  <button onClick={()=>dispatch({type:actions.DELETECONTACT,payload:contact.id})}>delete</button>  </div>)
        })
    }
    <div>
        {
            arrayButtons.map((page,index)=>(
                <button key={page+index} onClick={()=>setPageNow(index)}>  {index + 1}</button>
            ))
        }
    </div>
    </>
  )
}

export default withPagination(Contacs,5)

