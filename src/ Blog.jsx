import React from 'react'

function Blog({ posts }) {
  const sidebar = (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
  const content = posts.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  ))
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

export default Blog
