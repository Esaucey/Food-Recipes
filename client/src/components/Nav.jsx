import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

export const Nav = () => {
  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")

    navigate("/auth")
  }
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/create-recipe">Create-recipie</Link>
      <Link to="/saved-recipes">Saved-recipes</Link>
      {!cookies.access_token ? <Link to="/auth">Login/Register</Link> : <button onClick={logout}>Logout</button>}
    </div>
  )
}
