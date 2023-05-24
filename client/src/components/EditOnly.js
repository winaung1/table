import React from 'react'

function EditOnly({inputVal, inputVal2, inputVal3, inputVal4, setInputVal, setInputVal2, setInputVal3, setInputVal4}) {
  return (
    <>
         <input className='item border-r h-10 w-80 px-4' value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text"  placeholder='Title'/>
         <input className='item border-r h-10 w-80 px-4' value={inputVal2} onChange={(e) => setInputVal2(e.target.value)} type="text"  placeholder='Name'/>
         <input className='item border-r h-10 w-80 px-4' value={inputVal3} onChange={(e) => setInputVal3(e.target.value)} type="text"  placeholder='Age'/>
         <input className='item border-r h-10 w-80 px-4' value={inputVal4} onChange={(e) => setInputVal4(e.target.value)} type="text"  placeholder='ok'/>
    </>
  )
}

export default EditOnly