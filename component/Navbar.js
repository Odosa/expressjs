import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <div className="brand">
                <NavLink to='/'>
                    HOME
                </NavLink>
            </div>
            <div className="nav-right">
                <NavLink to='/about'>
                    About Us
                </NavLink>
                <NavLink to='/services'>
                    services
                </NavLink>

            </div>
        </nav>
    )
}

export default Navbar