import React from "react"
import { Divs, Slogancontainer, Title } from "./slogan.styles"

const imagen = "/assets/shared/desktop/image-best-gear.jpg"
const Slogan = (props) => {
  return (
    <Slogancontainer>
      <div id="info">
        <Title>
          Bringing you the <span style={{ color: "#D87D4A" }}>best</span> audio
          gear
        </Title>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div id="image">
        <img
          style={{ borderRadius: "10px", width: "100%" }}
          src={imagen}
          alt=""
        />
      </div>
    </Slogancontainer>
  )
}

export default Slogan
