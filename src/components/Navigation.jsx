import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className="navbar">
            <Link to="/">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/login">LogIn</Link>
        </div>
    )
}