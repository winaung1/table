import React from 'react'

function ReadOnly({item}) {
  return (
    <>
        <div className='item border-r h-10 w-80 px-4'>{item.title}</div>
        <div className='item border-r h-10 w-80 px-4'>{item.name}</div>
        <div className='item border-r h-10 w-80 px-4'>{item.age}</div>
        <div className='item border-r h-10 w-80 px-4'>{item.ok}</div>
    </>
  )
}

export default ReadOnly