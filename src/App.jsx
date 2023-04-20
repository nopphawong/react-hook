import { Routes, Route, Link } from 'react-router-dom'
import UseState from './pages/UseState'
import './App.css'
import { UseEffect } from './pages/UseEffect'
import { UseContext } from './pages/UseContext'
import { UseCallback } from './pages/UseCallback'
import  { UseMemo } from './pages/UseMemo'
import { UseRef } from './pages/UseRef'
import { UseReducer } from './pages/UseReducer'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>UseState</Link>
          </li>
          <li>
            <Link to='/effect'>UseEffect</Link>
          </li>
          <li>
            <Link to='/memo'>UseMemo</Link>
          </li>
          <li>
            <Link to='/callback'>UseCallback</Link>
          </li>
          <li>
            <Link to='/context'>UseContext</Link>
          </li>
          <li>
            <Link to='/ref'>UseRef</Link>
          </li>
          <li>
            <Link to='/reducer'>UseReducer</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<UseState />} />
        <Route path='/effect' element={<UseEffect />} />
        <Route path='/memo' element={<UseMemo />} />
        <Route path='/callback' element={<UseCallback />} />
        <Route path='/context' element={<UseContext />} />
        <Route path='/ref' element={<UseRef />} />
        <Route path='/reducer' element={<UseReducer />} />
      </Routes>
    </>
  )
}

export default App
