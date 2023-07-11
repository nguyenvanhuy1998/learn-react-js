import React from 'react'
import PropTypes from 'prop-types'

function BoilingVerdict({ celsius }) {
  return <div>{celsius >= 100 ? 'The water would boild' : 'The water would not boild'}</div>
}
BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired
}

export default BoilingVerdict
