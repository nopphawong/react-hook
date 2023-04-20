import { useState, useEffect } from 'react'

export const UseEffect = () => {
  const [count, setCount] = useState(1)
  const [name, setName] = useState('CRRU DEV')
  const [users, setUser] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`).then((res) =>
      res.json().then((data) => setUser(data))
    )
  }, [count])

  console.log(users);

  return (
    <div className='App'>
      <h1>
        Hello {name} {/* Interporation */}
      </h1>
      <button onClick={() => setName(users?.name || 'Missing')}>Update Name</button>
      <div className='card'>
        <h1>{users?.name || 'Missing'}</h1>
        <h3>{count}</h3>
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
