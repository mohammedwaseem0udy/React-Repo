import { useTheme } from "../context/ThemeContext"

function NavBar() {
    const themeCtx = useTheme();
    return (
        <nav className="nav">
            <ul className="nav-items">
                <li>
                    Home
                </li>
                <li>
                    Abouts Us
                </li>
                <li>
                    Careers
                </li>
            </ul>

            <div className="btn">
                <label className="slider">
                    <input className="checkbox" type="checkbox" onChange={themeCtx.changeTheme} checked={themeCtx.theme === 'dark'}/>
                    <span className="slider-ball"></span>
                </label>
            </div>
        </nav>
    )
}

export default NavBar