import React from 'react'
import PropTypes from 'prop-types'

const Water = ({ water }) => <li>{water.date}</li>

Water.propTypes = {
  water: PropTypes.shape({
    id: PropTypes.number,
    userid: PropTypes.number,
    sizeInMl: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
}

export default Water
