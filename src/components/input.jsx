import withCounter from "./withCounter"
function InputForm({counter,setCounter}) {
  return (
    <div><input onChange={(e)=> setCounter(e.target.value .length)}/> this input has {counter}  charactes</div>
  )
}

export default withCounter(InputForm)

