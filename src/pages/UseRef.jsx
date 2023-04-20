import { useState, useEffect, useRef } from 'react'

export const UseRef = () => {
  const [inputValue, setInputValue] = useState('')
  const previousInputValue = useRef('')

  useEffect(() => {
    previousInputValue.current = inputValue
    document.title = inputValue ? inputValue : 'UseRef'
  }, [inputValue])

  return (
    <div className='App'>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </div>
  )
}
