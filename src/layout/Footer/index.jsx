import React from "react"
import { Containerdesktop, Containertablet, Divs } from "./footer.styles"
import Typography from "@components/Typography"
import Flex from "@components/Flex"
import Navbar from "../../components/Navbar"

const Logo = "assets/shared/desktop/logo.svg"
const Facebook = "assets/shared/desktop/icon-facebook.svg"
const Twitter = "assets/shared/desktop/icon-twitter.svg"
const Instagram = "assets/shared/desktop/icon-instagram.svg"

const Footer = () => {
  return (
    <div>
      <Containerdesktop>
        <Divs>
          <img src={Logo} />
          <br />
          <Typography style={{ opacity: 0.5 }}>
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
            <br />
            <br />
            Copyright 2021. All Rights Reserved
          </Typography>
        </Divs>
        <Divs>
          <div>
            <Navbar />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "right",
              marginTop: "100px",
            }}
          >
            <Flex gap="16">
              <img src={Facebook} />
              <img src={Twitter} />
              <img src={Instagram} />
            </Flex>
          </div>
        </Divs>
      </Containerdesktop>

      <Containertablet>
        <div>
          <img src={Logo} />
          <br />
          <div id="nav" style={{ margin: "32px 0px" }}>
            <Navbar />
          </div>
          <br />

          <Typography style={{ opacity: 0.5 }}>
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </Typography>
        </div>

        <div
          id="logos"
          style={{
            width: "100%",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              fontFamily: "Manrope",
              fontSize: "15px",
              color: "gray",
              fontWeight: "bold",
            }}
          >
            Copyright 2021. All Rights Reserved
          </div>
          <div>
            <Flex gap="16">
              <img src={Facebook} />
              <img src={Twitter} />
              <img src={Instagram} />
            </Flex>
          </div>
        </div>
      </Containertablet>
    </div>
  )
}

export default Footer
