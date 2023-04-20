import { createContext } from 'react'
import { useState, useContext } from 'react'

const UserContext = createContext()

export const UseContext = () => {
  const [user, setUser] = useState('CRRU DEV')
  return (
    <UserContext.Provider value={user}>
      <h1>Parent Component</h1>
      <div>
        <ChildComponent1 />
      </div>
    </UserContext.Provider>
  )
}

const ChildComponent1 = () => {
  return (
    <>
      <h2>Child 1</h2>
      <ChildComponent2 />
    </>
  )
}

const ChildComponent2 = () => {
  const user = useContext(UserContext)
  return (
    <>
      <h3>Child</h3>
      <h4>{user}</h4>
    </>
  )
}
