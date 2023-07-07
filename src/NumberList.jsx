import React from 'react'
import ListItem from './ListItem'

export default function NumberList({ numbers = [] }) {
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  )
}
