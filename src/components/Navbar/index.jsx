import React from "react"
import { Link } from "react-router-dom"
import { NavContainer } from "./navbar.styles"

const Navbar = () => {
  return (
    <NavContainer>
      <Link style={{ color: "white", textDecoration: "none" }} to="/">
        home
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/category/headphones"
      >
        headphones
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/category/earphones"
      >
        earphones
      </Link>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/category/speakers"
      >
        speakers
      </Link>
    </NavContainer>
  )
}

export default Navbar
