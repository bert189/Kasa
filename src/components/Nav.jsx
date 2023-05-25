import { NavLink } from "react-router-dom";


function Nav({links}) {
    return (
        <nav className="nav">
            <ul>
                {links.map((link, index) => (
                    <li key={index} className="link">
                        <NavLink
                            to={link.url}
                            className={({ isActive }) => isActive ? "active" : ""}>
                                {link.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


export default Nav;
