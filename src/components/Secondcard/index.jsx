import React from "react"
import { Infocontainer, Secondcardcontainer, Title } from "./secondcard.styles"
import Button from "../Button"
import { Link } from "react-router-dom"

const Secondcard = (props) => {
  const { link, ...rest } = props
  return (
    <Secondcardcontainer>
      <img
        id="imagedesktop"
        style={{
          width: "100%",
          position: "relative",
          zIndex: "0",
          borderRadius: "10px",
        }}
        src="/assets/home/desktop/image-speaker-zx7.jpg"
        alt=""
      />
      <img
        id="imagetablet"
        style={{
          width: "100%",
          position: "relative",
          zIndex: "0",
          borderRadius: "10px",
        }}
        src="/assets/home/tablet/image-speaker-zx7.jpg"
        alt=""
      />
      <img
        id="imagemobile"
        style={{
          width: "100%",
          position: "relative",
          zIndex: "0",
          borderRadius: "10px",
        }}
        src="/assets/home/mobile/image-speaker-zx7.jpg"
        alt=""
      />
      <Infocontainer>
        <Title>ZX7 SPEAKER</Title>
        <br />
        <br />
        <Link style={{ color: "white", textDecoration: "none" }} to={link}>
          <Button text="see product" variant="secondary" />
        </Link>
      </Infocontainer>
    </Secondcardcontainer>
  )
}

export default Secondcard
