import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
