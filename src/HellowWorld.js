import React from 'react'
import PropTypes from 'prop-types'

const HellowWorld = ({name}) => {
  return (
    <div>
    <div>Hello, {name}</div>
    </div>
  )
}

HellowWorld.propTypes = {
    name: PropTypes.number
  }

export default HellowWorld;
