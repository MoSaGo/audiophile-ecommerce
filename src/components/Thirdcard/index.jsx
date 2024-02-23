import React from "react"
import {
  Imagecontainer,
  Infocontainer,
  Thirdcardcontainer,
} from "./thirdcard.styles"
import Button from "../Button"
import { Link } from "react-router-dom"

const Thirdcard = (props) => {
  const { link, ...rest } = props
  return (
    <Thirdcardcontainer>
      <Imagecontainer>
        <img
          id="imagedesktop"
          style={{ borderRadius: "10px", width: "100%" }}
          src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt=""
        />
        <img
          id="imagetablet"
          style={{ borderRadius: "10px", width: "100%" }}
          src="/assets/home/tablet/image-earphones-yx1.jpg"
          alt=""
        />
        <img
          id="imagemobile"
          style={{ borderRadius: "10px", width: "100%" }}
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          alt=""
        />
      </Imagecontainer>
      <Infocontainer>
        YX1 EARPHONES
        <br />
        <Link style={{ color: "white", textDecoration: "none" }} to={link}>
          <div id="button">
            <Button text="see product" variant="secondary" />
          </div>
        </Link>
      </Infocontainer>
    </Thirdcardcontainer>
  )
}

export default Thirdcard
