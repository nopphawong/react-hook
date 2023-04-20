import { useState } from 'react'
const UseState = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('CRRU Dev')

  return (
    <div className='App'>
      <h1>
        Hello {name} {/* Interporation */}
      </h1>
      <button onClick={() => setName('Nat Nopphawong')}>Update Name</button>
      <div className='card'>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
        <button onClick={() => setCount((count) => count + 1)}>Increase</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default UseState
