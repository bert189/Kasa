import { NavLink } from "react-router-dom";


function Nav({links}) {
    return (
        <nav className="nav">
            <ul>
                {links.map((link, index) => (
                    <li key={index} class="link">
                        <NavLink to={link.url} activeClassName="active">{link.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


export default Nav;
