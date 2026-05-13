import { useState } from 'react'
import './App.css'
import Home from './Home'
import FileDisplay from './FileDisplay'
import {Routes, Route, useParams} from 'react-router-dom'

function App() {
  const { id } = useParams()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/file/:id' element={<FileDisplay />} />
      </Routes>
    </>
  )
}

export default App
