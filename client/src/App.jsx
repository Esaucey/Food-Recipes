import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages/home'
import { Auth } from './pages/auth'
import { CreateRecipe } from './pages/create-recipe'
import { SavedRecipe } from './pages/saved-recipe'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/saved-recipes" element={<SavedRecipe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
