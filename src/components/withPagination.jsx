import { useContext,useState } from "react"
import {ContactsContext} from '../contex/GeneralContext'
const withPagination = (Component,elementPerPage) =>{
    
    return function WithPagination(){
        const {allContacs} = useContext(ContactsContext)
        const howManyElemmentsPerPage = elementPerPage
        const howManyPages = Math.ceil(allContacs.length / howManyElemmentsPerPage)
        const [pageNow,setPageNow] = useState(0)
        const start = pageNow * howManyElemmentsPerPage
        const end = start + howManyElemmentsPerPage
        const parcialContact = allContacs.slice(start,end)
        const arrayButtons = new Array(howManyPages).fill("buttonPage")

        return <Component parcialContact={parcialContact} setPageNow={setPageNow} arrayButtons={arrayButtons}/>
    }
}
export default withPagination

