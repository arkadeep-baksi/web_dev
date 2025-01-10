import { useState } from 'react'
import './App.css'

function App() {
  const [num, setCount] = useState(0)


  return (
    <>
      <div className="card">
        <button onClick={function (){
          setCount(Math.random());
        }}>
          Random number is {num}
        </button>
      </div>
    </>
  )
}

export default App
