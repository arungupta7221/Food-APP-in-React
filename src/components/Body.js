import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'

function filteredSearchData(search, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(search.toLowerCase()),
  )
  return filterData
  console.log(filterData)
}

const Body = () => {
  const [searchText, setSearchText] = useState('')
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const isOnline = useOnline()

  const fetchRestaurantsFromApi = async () => {
    try {
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING',
      )
      const res = await data.json()
      setAllRestaurants(res?.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(res?.data?.cards[2]?.data?.data?.cards)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRestaurantsFromApi()
  }, [])

  const searchData = (searchText, restaurants) => {
    if (searchText !== '') {
      const data = filteredSearchData(searchText, restaurants)
      setFilteredRestaurants(data)
      setErrorMessage('')
      if (data.length === 0) {
        setErrorMessage('No matches restaurant found')
      }
    } else {
      setErrorMessage('')
      setFilteredRestaurants(restaurants)
    }
  }
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null
  if (!isOnline) return <h2>🔴Please start your internet Connection</h2>
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants)
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id}>
                <RestaurantCard restaurant={restaurant} />
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Body
