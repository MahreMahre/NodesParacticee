import React from 'react'
import CreatePost from './pages/createpost'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Feed from './pages/feed'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App
