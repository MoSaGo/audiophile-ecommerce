import React from "react"
import {
  Imagecontainer,
  Infocontainer,
  Isnew,
  Principalcontainer,
  Productdescriptioncontainer,
  Title,
} from "./productdescription.styles"
import Button from "../Button"
import { Link } from "react-router-dom"

const Productdescription = (props) => {
  const {
    imagedesktop,
    imagetablet,
    imagemobile,
    isnew,
    name,
    description,
    count,
    link,
    ...rest
  } = props
  return (
    <Principalcontainer
      imagedesktop={imagedesktop}
      imagetablet={imagetablet}
      imagemobile={imagemobile}
      isnew={isnew}
      name={name}
      description={description}
      count={count}
      link={link}
    >
      <div id="desktop">
        {count % 2 === 0 && (
          <Productdescriptioncontainer>
            <Imagecontainer>
              <img style={{ width: "80%" }} src={imagedesktop} alt="" />
            </Imagecontainer>
            <Infocontainer>
              <Isnew>{isnew && <span>new product</span>}</Isnew>
              <Title>{name}</Title>
              <p>{description}</p>
              <br />
              <br />
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={link}
              >
                <div id="buttoncontainer">
                  <Button text="see product" variant="primary" />
                </div>
              </Link>
            </Infocontainer>
          </Productdescriptioncontainer>
        )}

        {count % 2 != 0 && (
          <Productdescriptioncontainer>
            <Infocontainer>
              <Isnew>{isnew && <span>new product</span>}</Isnew>
              <Title>{name}</Title>
              <p>{description}</p>
              <br />
              <br />
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={link}
              >
                <div id="buttoncontainer">
                  <Button text="see product" variant="primary" />
                </div>
              </Link>
            </Infocontainer>
            <Imagecontainer>
              <img style={{ width: "80%" }} src={imagedesktop} alt="" />
            </Imagecontainer>
          </Productdescriptioncontainer>
        )}
      </div>
      <div id="tablet">
        <Productdescriptioncontainer>
          <Imagecontainer>
            <img style={{ width: "80%" }} src={imagetablet} alt="" />
          </Imagecontainer>
          <Infocontainer>
            <Isnew>{isnew && <span>new product</span>}</Isnew>
            <Title>{name}</Title>
            <p>{description}</p>
            <br />
            <br />
            <Link style={{ color: "white", textDecoration: "none" }} to={link}>
              <div id="buttoncontainer">
                <Button text="see product" variant="primary" />
              </div>
            </Link>
          </Infocontainer>
        </Productdescriptioncontainer>
      </div>
      <div id="mobile">
        <Productdescriptioncontainer>
          <Imagecontainer>
            <img style={{ width: "80%" }} src={imagemobile} alt="" />
          </Imagecontainer>
          <Infocontainer>
            <Isnew>{isnew && <span>new product</span>}</Isnew>
            <Title>{name}</Title>
            <p>{description}</p>
            <br />
            <br />
            <Link style={{ color: "white", textDecoration: "none" }} to={link}>
              <div id="buttoncontainer">
                <Button text="see product" variant="primary" />
              </div>
            </Link>
          </Infocontainer>
        </Productdescriptioncontainer>
      </div>
    </Principalcontainer>
  )
}

export default Productdescription
