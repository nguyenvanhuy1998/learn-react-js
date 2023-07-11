import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const { searchText, inStock, handleChange } = this.props
    return (
      <form>
        <input name='product' type='text' placeholder='Search...' value={searchText} onChange={handleChange} />
        <div>
          <input name='inStock' type='checkbox' value={inStock} onChange={handleChange} />
          Only show products in stock
        </div>
      </form>
    )
  }
}

export default SearchBar
