import { useState, useCallback } from 'react'

export const UseCallback = () => {
  const [count, setCount] = useState(0)

  const countDisplay = useCallback(
    (srtInput) => {
      console.log('Call')
      return srtInput + ' ' + count
    },
    [count]
  ) // re-render when count value changed and return function.

  return (
    <div className='App'>
      <h1>{countDisplay('Count')}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  )
}
