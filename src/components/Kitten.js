import React, { PropTypes } from 'react'

function Kitten ({ width, height }) {
  return (
    <img width={width} height={height || width} src={`https://placekitten.com/g/${width}/${height || width}`} />
  )
}

Kitten.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number
}

export default Kitten
