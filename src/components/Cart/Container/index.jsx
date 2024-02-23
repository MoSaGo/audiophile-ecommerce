import React from "react"
import {
  Amountcontainer,
  Containercontainer,
  Imagecontainer,
  Productmincontainer,
  Productscontainer,
  Textcontainer,
  Titlecontainer,
} from "./container.styles"
import Button from "@components/Button"
import Amount from "@components/Amount"
import { useDispatch, useSelector } from "react-redux"
import { removeAll } from "../../../redux/feactures/cart/cartSlice"
import { Link } from "react-router-dom"

const Container = () => {
  const cartState = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  var nameval = undefined
  if (cartState.totalItems > 0) {
    nameval = cartState.totalItems
  }
  if (cartState.totalItems <= 0) {
    nameval = undefined
  }
  function Editname(productname) {
    let name = productname[0] + productname[1] + productname[2] + productname[3]
    return name
  }
  return (
    <Containercontainer>
      <Titlecontainer>
        <span style={{ fontWeight: "bold" }}>
          CART ({cartState.totalItems})
        </span>
        <span>
          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              cursor: "pointer",
              color: "gray",
            }}
            onClick={() => dispatch(removeAll())}
          >
            Remove all
          </button>
        </span>
      </Titlecontainer>

      {cartState.products.map((item) => {
        return (
          <Productscontainer key={item.id}>
            <Productmincontainer>
              <Imagecontainer>
                <img
                  style={{ width: "100%", borderRadius: "10px" }}
                  src={item.product.image.desktop}
                />
              </Imagecontainer>
              <Textcontainer>
                <span style={{ fontWeight: "bold" }}>
                  {Editname(item.product.name)}
                </span>
                <span style={{ color: "gray", fontWeight: "bold" }}>
                  ${item.product.price}
                </span>
              </Textcontainer>
            </Productmincontainer>
            <Amountcontainer>
              <Amount cartnumber={item.count} product={item.product} />
            </Amountcontainer>
          </Productscontainer>
        )
      })}

      <Titlecontainer>
        <span style={{ color: "gray", fontWeight: "bold" }}>Total</span>
        <span style={{ fontWeight: "bold" }}>${cartState.subtotal}</span>
      </Titlecontainer>
      {nameval && (
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={"/checkout"}
        >
          <Button text="checkout" variant="primary" />
        </Link>
      )}
      {nameval === undefined && <Button text="checkout" variant="primary" />}
    </Containercontainer>
  )
}

export default Container
