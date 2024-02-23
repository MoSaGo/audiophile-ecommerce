import React from "react"
import Button from "../Button"
import {
  Articles,
  Cardcontainer,
  Data,
  Datafeactures,
  DescriptionContainer,
  Detailscontainer,
  Infocontainer,
  Isnewcontainer,
  Paragraph,
  Pricecontainer,
  Table,
  Title,
  Number,
  Imagescontainer,
} from "./details.styles"
import Amount from "../Amount"
import { useDispatch, useSelector } from "react-redux"
import { addProducts } from "../../redux/feactures/cart/cartSlice"

const Details = (props) => {
  const cartState = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const {
    image,
    name,
    isnew,
    description,
    price,
    features,
    includes,
    gallery,
    product,
    ...rest
  } = props
  return (
    <Detailscontainer
      image={image}
      name={name}
      isnew={isnew}
      description={description}
      price={price}
      features={features}
      includes={includes}
      gallery={gallery}
      product={product}
    >
      <Cardcontainer>
        <div>
          <img style={{ width: "80%" }} src={image} alt="" />
        </div>
        <Infocontainer>
          <Isnewcontainer>{isnew && <span>New product</span>}</Isnewcontainer>
          <br />
          <Title>{name}</Title>
          <br />
          <p>{description}</p>
          <br />
          <Pricecontainer>${price}</Pricecontainer>
          <br />
          <Articles>
            <Amount />
            <button
              onClick={() => {
                dispatch(addProducts({ product, count: cartState.temp }))
              }}
              style={{ borderColor: "transparent" }}
            >
              <Button text="add to cart" variant="primary" />
            </button>
          </Articles>
        </Infocontainer>
      </Cardcontainer>
      <DescriptionContainer>
        <Datafeactures>
          FEATURES
          <Paragraph>{features}</Paragraph>
        </Datafeactures>
        <Data>
          in the box
          <Table>
            <tr>
              <Number>{includes[0] && includes[0].quantity}x</Number>
              <td>{includes[0] && includes[0].item}</td>
            </tr>
            <tr>
              <Number>{includes[1] && includes[1].quantity}x</Number>
              <td>{includes[1] && includes[1].item}</td>
            </tr>
            <tr>
              <Number>{includes[2] && includes[2].quantity}x</Number>
              <td>{includes[2] && includes[2].item}</td>
            </tr>
            <tr>
              <Number>{includes[3] && includes[3].quantity}x</Number>
              <td>{includes[3] && includes[3].item}</td>
            </tr>
            <tr>
              <Number>{includes[4] && includes[4].quantity}x</Number>
              <td>{includes[4] && includes[4].item}</td>
            </tr>
          </Table>
        </Data>
      </DescriptionContainer>
      <Imagescontainer>
        <div style={{ display: "flex", gap: "32px", flexDirection: "column" }}>
          <img
            style={{ borderRadius: "5px", width: "100%" }}
            src={gallery.first.desktop}
            alt=""
          />
          <img
            style={{ borderRadius: "5px", width: "100%" }}
            src={gallery.second.desktop}
            alt=""
          />
        </div>
        <div>
          <img
            style={{ borderRadius: "5px", width: "100%" }}
            src={gallery.third.desktop}
            alt=""
          />
        </div>
      </Imagescontainer>
    </Detailscontainer>
  )
}

export default Details
