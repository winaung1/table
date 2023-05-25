import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";

function Home() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [show, setShow] = useState(false)
  const [id, setId] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      const res = await axios.get("https://tabledeploy.herokuapp.com/")
      setData(res.data)
      
    }

    fetchData()
  }, []) 

  const handleEdit = async (id) => {
    setId(id)
   }
  const handleUpdate = async (id) => {
    await axios.put('https://tabledeploy.herokuapp.com/update', {name: name, age: age, id: id})
   }


  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="flex justify-between p-4">
            <div>
              <input value={item.name} type='text' />
              <input value={item.age} type='text' />
            </div>
            <div className={id == item.id ? 'block' : 'hidden'}>
              <input onChange={(e) => setName(e.target.value)} type='text' placeholder='name'/>
              <input onChange={(e) => setAge(e.target.value)} type='text' placeholder='age'/>
            </div>
            {show ? 
            <div className='flex space-x-2'>
            <button onClick={() => {
              handleEdit(item.id)}
            } className='bg-red-500 px-3 py-1 rounded'>Edit</button>
            <button onClick={() => {
              handleUpdate(item.id)
            }} className='bg-orange-500 px-3 py-1 rounded'>Update</button>
            </div> : 
            <>
            </>
          }
        </div>
      ))}
      <FaEdit className='cursor-pointer text-4xl mx-4 hover:text-green-500' onClick={() => setShow(prev => !prev)}/>
    </div>
  )
}

export default Home