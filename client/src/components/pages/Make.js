import axios from 'axios'
import React, { useState } from 'react'

export const Make = () => {
   const [name, setName] = useState('')
   const [age, setAge] = useState('')

   const datas = {
     name,
     age
   }
  const handleClick = async () => {
   await axios.post('https://tabledeploy.herokuapp.com/create', datas)
  }
  return (
    <div className='p-3'>
      <input onChange={(e) => setName(e.target.value)} className='border border-black p-2' type="text" placeholder='name'/>
      <input onChange={(e) => setAge(e.target.value)} className='border border-black p-2' type="text" placeholder='age'/>
      <button onClick={handleClick} className='bg-green-500 p-2'>Click</button>
    </div>
  )
}
