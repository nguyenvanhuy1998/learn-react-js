import React from 'react'

function Comment({ author, text, date }) {
  return (
    <div className='Comment'>
      <UserInfo author={author} />
      <div className='Comment-text'>{text}</div>
      <div className='Comment-date'>{date}</div>
    </div>
  )
}
function Avatar({ user }) {
  return <img src={user.avatarUrl} alt={user.name} className='Avatar' />
}
function UserInfo({ author }) {
  return (
    <div className='UserInfo'>
      <Avatar user={author} />
      <div className='UserInfo-name'>{author.name}</div>
    </div>
  )
}
export default Comment
