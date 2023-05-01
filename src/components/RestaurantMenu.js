import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from './cartSlice'
const RestaurantMenu = () => {
  const dispatch = useDispatch()
  const handleAddClick = () => {
    dispatch(addItem('Grapes')) // payload:{grapes}
  }
  const handleRemoveClick = () => {
    dispatch(removeItem())
  }
  const params = useParams()
  console.log(params)
  useEffect(() => {
    fetchMenuData()
  }, [])

  const fetchMenuData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId=',
    )
    const json = await data.json()
    console.log(json)
  }
  return (
    <div>
      <h3>Add item in the Cart</h3>
      <button className="cart-btn" onClick={() => handleAddClick()}>
        Add to Cart
      </button>
      <button className="cart-btn" onClick={() => handleRemoveClick()}>
        Remove Cart
      </button>
    </div>
  )
}

export default RestaurantMenu
