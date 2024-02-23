import React, { useState } from "react"
import { Menucontainer, StyledHeader } from "./header.styles"
import Navbar from "../../components/Navbar"
import Float from "../../components/Cart/Float"
import { render } from "react-dom"
import ReactDOM from "react-dom/client"
import { useSelector } from "react-redux"
import Container from "../../components/Cart/Container"
import Seeproducts from "../../components/Seeproducts"

const Logo = "/assets/shared/desktop/logo.svg"
const Burguer = "/assets/shared/tablet/icon-hamburger.svg"
const Car = "/assets/shared/desktop/icon-cart.svg"
const Header = () => {
  const [ismenuOpen, setIsmenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsmenuOpen((previousState) => !previousState)
    isCartOpen && setIsCartOpen(false)
  }

  const handleToggleCart = () => {
    setIsCartOpen((previousState) => !previousState)
    ismenuOpen && setIsmenuOpen(false)
  }

  const state = useSelector((state) => state.cart)

  return (
    <StyledHeader>
      <div id="burguer" onClick={handleToggleMenu}>
        <img style={{ width: "100%" }} src={Burguer} alt="" />
      </div>
      <div>
        <img style={{ width: "100%" }} src={Logo} alt="" />
      </div>
      <div id="navbar">
        <Navbar />
      </div>
      <div>
        <img
          style={{ cursor: "pointer", width: "100%", height: "auto" }}
          src={Car}
          alt=""
          onClick={handleToggleCart}
        />
      </div>
      {isCartOpen && <Container />}
      {ismenuOpen && (
        <Menucontainer onClick={handleToggleMenu}>
          <Seeproducts />
        </Menucontainer>
      )}
      <Float />
    </StyledHeader>
  )
}

export default Header
