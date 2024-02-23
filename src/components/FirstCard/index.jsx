import React from "react"
import {
  Descriptioncontainer,
  Firstcardcontainer,
  ImageContainer,
  Title,
} from "./firstcard.styles"
import Button from "../Button"
import { Link } from "react-router-dom"

const FirstCard = (props) => {
  const { link, ...rest } = props
  return (
    <Firstcardcontainer>
      <ImageContainer>
        <img
          style={{ width: "100%" }}
          src="/assets/home/desktop/image-speaker-zx9.png"
          alt=""
        />
      </ImageContainer>
      <img id="circles" src="/assets/home/desktop/pattern-circles.svg" alt="" />

      <Descriptioncontainer>
        <Title>
          ZX9 <br /> SPEAKER
        </Title>
        <p style={{ width: "100%" }}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <br />
        <br />
        <br />
        <Link style={{ color: "white", textDecoration: "none" }} to={link}>
          <div style={{ width: "100%" }}>
            <Button text="see product" variant="tertiary" />
          </div>
        </Link>
      </Descriptioncontainer>
    </Firstcardcontainer>
  )
}

export default FirstCard
