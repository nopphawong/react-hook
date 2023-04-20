import { useState, useMemo } from 'react'

export const UseMemo = () => {
  const [inputValue, setInputValue] = useState('')

  const myMemo = useMemo(() => {
    return <ChildComponent count={inputValue.length} />
  }, [inputValue]) // re-render when inputValue value changed and return value from function.

  return (
    <div>
      <input
        type='text'
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      {myMemo}
    </div>
  )
}

const ChildComponent = ({ count }) => {
  console.log('Call')
  return (
    <>
      <h1>Count {count}</h1>
    </>
  )
}
