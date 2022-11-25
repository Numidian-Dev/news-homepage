import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "../styles/images/logo.svg"
import openMenu from "../styles/images/icon-menu.svg"
import closeMenu from "../styles/images/icon-menu-close.svg"
const Nav = () => {
    const [displayState, setDisplayState] = useState(null)

    const display = { display: displayState }
    useEffect(() => {
        let body = document.body
        body.classList.remove('body')
        if (displayState === "flex") {
            body.classList.add("body")
        }
    }, [displayState])
    return (
        <header>
            <div className="logo"><Image src={logo} alt="logo" /></div>
            <div className="openMenu" onClick={() => setDisplayState('flex')}><Image src={openMenu} alt="open" /></div>
            <nav className="nav-menu" style={display}>
                <ul className="ul-menu" >
                    <div className="closeMenu"><Image src={closeMenu} alt="cross" onClick={() => setDisplayState('none')} /></div>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </nav>

        </header>

    )
}
export default Nav




