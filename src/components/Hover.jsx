import withCounter from "./withCounter"
function Hover({counter,setCounter}) {
  return (
      <>
    <div onMouseEnter={()=> setCounter(prev => prev + 1)}>I have been Hover {counter}</div>
      </>
  )
}

export default withCounter(Hover,5,"red")