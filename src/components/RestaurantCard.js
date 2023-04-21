import React from 'react'

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant.data.cloudinaryImageId}`}
        alt="card"
      />
      <h3>{restaurant.data.name}</h3>
      <h5>{restaurant.data.cuisines.join(', ')}</h5>
      <h5>{restaurant.data.area}</h5>
      <span>
        <h4
          style={
            restaurant.data.avgRating < 4
              ? { backgroundColor: 'var(--light-red)' }
              : restaurant.data.avgRating === '--'
              ? { backgroundColor: 'white', color: 'black' }
              : { color: 'white' }
          }
        >
          <i className="fa-solid fa-star"></i>
          {restaurant.data.avgRating}
        </h4>
        <h4>•</h4>
        <h4>{restaurant.data.lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{restaurant.data.costForTwoString}</h4>
      </span>
    </div>
  )
}

export default RestaurantCard
