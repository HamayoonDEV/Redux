import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const increament=()=>{
    dispatch({type:"INC"})
  }
  const decreament = ()=>{
    dispatch({type:"DEC"})

  }
  const add = ()=>{
    dispatch({type:"ADD",payload:10})
  }

  return (
    <div >
      <h1>counter</h1>
      <h3>{counter}</h3>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
      <button onClick={add}>+10</button>
     
    </div>
  );
}

export default App;
