import React,{useState, useContext} from 'react'
import * as actions from '../Reducers/actions'
import {ContactsContext} from '../contex/GeneralContext'
import {v4 as uuidv4} from 'uuid'
import withPagination from './withPaginations'
 function Form() {
  const {allContacs,dispatch} = useContext(ContactsContext)
  const [nameInput,setName] = useState("")
  const [phone,setPhone] = useState(0)
  return (
  <>
  <input  value={nameInput} onChange={(e)=> setName(e.target.value)} placeholder="Write your name"/>
  <input  value={phone} onChange={(e)=> setPhone(e.target.value)}/>
  <button onClick={()=> dispatch({type:actions.ADDCONTACT,payload:{id:uuidv4(),nameInput:nameInput,phone:phone}})}>Add Contact</button>
  </>
  )
}
export default withPagination(Form,8)

