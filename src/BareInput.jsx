import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class BareInput extends Component {
  render() {
    const { type, ...rest } = this.props
    return <input {...rest} />
  }
}

BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string
}
