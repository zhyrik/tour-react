import React, { useState, useEffect } from 'react'

import './TourList.css'

import Tour from './Tour'
import { tourData } from '../tourData'

/**
 * fuctional componet wrapper for Card items
 * @function
 * @returns {JSX.Element}
 */
export default function TourLIst() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    setTours(tourData)
  }, [])

  const removeTour = id => {
    const sortedTours = tours.filter(tour => tour.id !== id)

    setTours(sortedTours)
  }

  return (
    <section className="tour-lists">
      {tours.map(tour => {
        return (
          <Tour
            tour={tour}
            key={tour.id}
            removeTour={removeTour}
          />
        )
      })}
    </section>
  )
}
