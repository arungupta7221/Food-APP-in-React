import React from 'react'
import { useParams } from 'react-router-dom'
const RestaurantMenu = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <h2>urlId:{params.id}</h2>
      <h2>Menu</h2>
    </div>
  )
}

export default RestaurantMenu
