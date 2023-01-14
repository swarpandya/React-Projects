import React from 'react'
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <nav>
        <h1>
            Techystar
        </h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header;