import React, { useState } from "react"
import {
  Billingcontainer,
  Cashcontainer,
  Circle,
  Circlecontainer,
  Datacontainer,
  Emoneycontainer,
  Paymentcontainer,
  Shippingcontainer,
} from "./data.styles"
import { useDispatch, useSelector } from "react-redux"
import {
  changetotrue,
  changetofalse,
} from "../../redux/feactures/cart/cartSlice"

const Data = () => {
  const cartState = useSelector((store) => store.cart)

  const [isOne, setIsOne] = useState(false)
  const [isTwo, setIsTwo] = useState(false)

  const handleToggleOne = () => {
    setIsOne((previousState) => !previousState)
    isTwo && setIsTwo(false)
    datos.method = true
  }

  const handleToggleTwo = () => {
    setIsTwo((previousState) => !previousState)
    isOne && setIsOne(false)
    datos.method = true
  }

  const [datos, setDatos] = useState({
    name: "",
    email: "",
    phone: "",
    addres: "",
    zip: "",
    city: "",
    country: "",
    enumber: "",
    epin: "",
    method: false,
  })
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  const dispatch = useDispatch()

  return (
    <Datacontainer>
      <span
        style={{
          fontSize: "32px",
          lineHeight: "36px",
          color: "black",
        }}
      >
        checkout
      </span>
      <br />
      <br />
      billing details
      <br />
      <br />
      <Billingcontainer>
        <div>
          <div>
            <span>name</span>
            <br />
            <input
              name="name"
              onChange={handleInputChange}
              style={{
                width: "90%",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="Alexei Ward"
            />
          </div>
          <br />
          <div>
            <span>phone number</span>
            <br />
            <input
              name="phone"
              onChange={handleInputChange}
              style={{
                width: "90%",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>
        <div>
          <span>email address</span>
          <br />
          <input
            name="email"
            onChange={handleInputChange}
            style={{
              width: "90%",
              height: "56px",
              borderRadius: "8px",
              padding: "18px 24px",
              border: "1px solid black",
            }}
            type="text"
            placeholder="alexei@mail.com"
          />
        </div>
      </Billingcontainer>
      <br />
      <span>shipping info</span>
      <br />
      <Shippingcontainer>
        <div id="address">
          <span>address</span>
          <br />
          <input
            name="addres"
            onChange={handleInputChange}
            style={{
              width: "95%",
              height: "56px",
              borderRadius: "8px",
              padding: "18px 24px",
              border: "1px solid black",
            }}
            type="text"
            placeholder="1137 Williams Avenue"
          />
        </div>
        <br />
        <div id="zip-city" style={{ width: "100%", display: "flex" }}>
          <div>
            <span>ZIP code</span>
            <br />
            <input
              name="zip"
              onChange={handleInputChange}
              style={{
                width: "90%",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="10001"
            />
          </div>
          <div>
            <span>city</span>
            <br />
            <input
              name="city"
              onChange={handleInputChange}
              style={{
                width: "90%",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="New York"
            />
          </div>
        </div>
        <br />
        <div id="country">
          <span>Country</span>
          <br />
          <input
            name="country"
            onChange={handleInputChange}
            style={{
              width: "90%",
              height: "56px",
              borderRadius: "8px",
              padding: "18px 24px",
              border: "1px solid black",
            }}
            type="text"
            placeholder="United States"
          />
        </div>
      </Shippingcontainer>
      <br />
      <span>payment details</span>
      <br />
      <Paymentcontainer>
        <div id="money-pin" style={{ display: "flex" }}>
          <div>Payment Method</div>
          <div>
            {isOne && (
              <Emoneycontainer>
                <Circlecontainer>
                  <Circle></Circle>
                </Circlecontainer>
                e-Money
              </Emoneycontainer>
            )}
            {isOne === false && (
              <Emoneycontainer
                onClick={handleToggleOne}
                style={{ borderColor: "black" }}
              >
                <Circlecontainer>
                  <Circle style={{ backgroundColor: "transparent" }}></Circle>
                </Circlecontainer>
                e-Money
              </Emoneycontainer>
            )}

            <br />

            {isTwo && (
              <Cashcontainer>
                <Circlecontainer>
                  <Circle></Circle>
                </Circlecontainer>
                Cash on Delivery
              </Cashcontainer>
            )}
            {isTwo === false && (
              <Cashcontainer
                style={{ borderColor: "black" }}
                onClick={handleToggleTwo}
              >
                <Circlecontainer>
                  <Circle style={{ backgroundColor: "transparent" }}></Circle>
                </Circlecontainer>
                Cash on Delivery
              </Cashcontainer>
            )}
          </div>
        </div>
        <br />
        <div id="emon-enum" style={{ display: "flex" }}>
          <div>
            <span>e-Money Number</span>
            <br />
            <input
              name="enumber"
              onChange={handleInputChange}
              style={{
                width: "90%",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="238521993"
            />
          </div>
          <div>
            <span>e-Money PIN</span>
            <br />
            <input
              name="epin"
              onChange={handleInputChange}
              style={{
                width: "90%",
                height: "56px",
                borderRadius: "8px",
                padding: "18px 24px",
                border: "1px solid black",
              }}
              type="text"
              placeholder="6891"
            />
          </div>
        </div>
      </Paymentcontainer>
      {datos.name != "" &&
        datos.addres != "" &&
        datos.city != "" &&
        datos.country != "" &&
        datos.email != "" &&
        datos.enumber != "" &&
        datos.epin != "" &&
        datos.method &&
        datos.phone != "" &&
        datos.zip != "" &&
        (dispatch(changetotrue()), console.log(cartState.ready))}
      {(datos.name === "" ||
        datos.addres === "" ||
        datos.city === "" ||
        datos.country === "" ||
        datos.email === "" ||
        datos.enumber === "" ||
        datos.epin === "" ||
        !datos.method ||
        datos.phone === "" ||
        datos.zip === "") &&
        (dispatch(changetofalse()), console.log(cartState))}
    </Datacontainer>
  )
}

export default Data
