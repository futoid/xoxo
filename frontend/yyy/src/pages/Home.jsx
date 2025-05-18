import { Link } from "react-router-dom"

function Home() {
  return (
    <div>

      <h1>Welcome to XOXO!</h1>

      <button>
        <Link to="/login">Login</Link></button>

      <p>New user? <Link to="/Signup">Signup now</Link></p>
    </div>
  )
}

export default Home 