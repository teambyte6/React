import './App.css';
import { useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setresult] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setresult((result) => result + Number(inputRef.current.value))
  }

  const sub = (e) => {
    e.preventDefault();
    setresult((result) => result - Number(inputRef.current.value))
  }

  const mul = (e) => {
    e.preventDefault();
    setresult((result) => result * Number(inputRef.current.value))
  }

  const div = (e) => {
    e.preventDefault();
    setresult((result) => result / Number(inputRef.current.value))
  }
  
  const inputreset = (e) =>{
    e.preventDefault();
    inputRef.current.value = 0
  }

  const inputresult = (e) =>{
    e.preventDefault();
    setresult((prevVal) => prevVal * 0)
  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <form>
        <p>{result}</p>
        <input 
          ref={inputRef}
          type="number"
        />
      </form>
      <button onClick={add}>Add</button>
      <button onClick={sub}>Subtract</button>
      <button onClick={mul}>Multiply</button>
      <button onClick={div}>Divide</button>
      <button onClick={inputreset} style={{backgroundColor:"red", color:"white", cursor:"pointer"}}>Input Reset</button>
      <button onClick={inputresult} style={{backgroundColor:"red", color:"white", cursor:"pointer"}}>Result Reset</button>
    </div>
  );
}

export default App;
