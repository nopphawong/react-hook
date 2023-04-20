import { useReducer } from 'react'

const reducer = (state, action) => {
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText }
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText }
    default:
      return state
  }
}

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <div className='App'>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' })
          dispatch({ type: 'toggleShowText' })
        }}
      >
        Show Text
      </button>
      {state.showText && <p>Show Text</p>}
    </div>
  )
}
