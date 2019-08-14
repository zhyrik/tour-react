import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaWindowClose, FaCaretSquareDown } from 'react-icons/fa'

import './Tour.css'

/**
 * Tour cart component
 * @function
 * @param {object} tour - data 
 * @param {function} removeTour - rremove item
 * @returns {JSX.Element} 
 */
function Tour({ tour, removeTour }) {
  const { id, city, img, name, info } = tour
  const [showInfo, setShowInfo] = useState(false)

  const handleInfo = () => {
    setShowInfo(!showInfo)
  }

  return (
    <article className="tour" data-test="tour">
      <div className="img-container">
        <img src={img} alt="city" width="200" className="img"/>
        <span
          className="close-btn"
          onClick={() => removeTour(id)}
          data-test="button-close"
        >
          <FaWindowClose />
        </span>
      </div>

      <div className="tour-info">
        <h3 className="tour-h3">{city}</h3>
        <h4 className="tour-h4">{name}</h4>
        <h5 className="tour-h5">info
          <span
            className="tour-h5-span"
            onClick={() => handleInfo()}
            data-test="button-info"
          >
            <FaCaretSquareDown />
          </span>
        </h5>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    name: PropTypes.string,
    img: PropTypes.string,
    info: PropTypes.string
  })
}

export default Tour