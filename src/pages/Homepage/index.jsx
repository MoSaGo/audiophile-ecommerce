import React from "react"
import Slogan from "@components/Slogan"
import Fproduct from "../../components/Fproduct"
import FirstCard from "../../components/FirstCard"
import Secondcard from "../../components/Secondcard"
import Thirdcard from "../../components/Thirdcard"
import Seeproducts from "../../components/Seeproducts"

const Homepage = () => {
  return (
    <div>
      <Fproduct link="/product-details/4" />
      <Seeproducts />
      <FirstCard link="/product-details/6" />
      <Secondcard link="/product-details/5" />
      <Thirdcard link="/product-details/1" />
      <Slogan />
    </div>
  )
}

export default Homepage
