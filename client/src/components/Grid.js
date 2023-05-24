import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import ReadOnly from './ReadOnly'
import EditOnly from './EditOnly'

function Grid() {
    const [arr, setArr] = useState([])
    const [inputVal, setInputVal] = useState('')
    const [inputVal2, setInputVal2] = useState('')
    const [inputVal3, setInputVal3] = useState('')
    const [inputVal4, setInputVal4] = useState('')
    const generatedId = Math.floor(Math.random() * 100);
    const tableCollectionRef = collection(db, "table");
    const [show, setShow] = useState(true)

    // const createTable = async () => {
    //     if(inputVal || inputVal2 || inputVal3 || inputVal4 !== ''){
    //      await addDoc(tableCollectionRef, {  title: inputVal,
    //         name: inputVal2,
    //         age: inputVal3,
    //         ok: inputVal4,})
    //     }
    //    setInputVal('')
    //    setInputVal2('')
    //    setInputVal3('')
    //    setInputVal4('')
    // }

    // useEffect(() => {
    //     const getTable = async () => {
    //         const data = await getDocs(tableCollectionRef)
    //         setArr(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }
    //     getTable();
    // }, [tableCollectionRef])
    const updateData = (id, items) => {
        setInputVal(items.one)
        setInputVal2(items.two)
        setInputVal3(items.three)
        setInputVal4(items.four)

    }

    const addItem = () => {
       const item = {
         id: generatedId,
         title: inputVal,
         name: inputVal2,
         age: inputVal3,
         ok: inputVal4,
       }
       
       if(inputVal || inputVal2 || inputVal3 || inputVal4 !== ''){
           setArr(oldList => [...oldList, item])
        }
       setInputVal('')
       setInputVal2('')
       setInputVal3('')
       setInputVal4('')
    }
   
     return (
       <div className=''>
         <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text"  placeholder='Title' className='px-2'/>
         <input value={inputVal2} onChange={(e) => setInputVal2(e.target.value)} type="text"  placeholder='Name' className='px-2'/>
         <input value={inputVal3} onChange={(e) => setInputVal3(e.target.value)} type="text"  placeholder='Age' className='px-2'/>
         <input value={inputVal4} onChange={(e) => setInputVal4(e.target.value)} type="text"  placeholder='ok' className='px-2'/>
         <button onClick={addItem} className='bg-green-500 p-2 text-white rounded'>Click</button>
         <div>
             <div className='flex items-center space-x-4 justify-around'>
               <h1>title</h1>
               <h1>name</h1>
               <h1>age</h1>
               <h1>wow</h1>
             </div>
           <ol className='list-decimal'>
           {arr.map((item) => (
             <>
             <li className='p-0 relative'>
                 <div className='last:border-b flex items-center border-t border-r border-l p-0 w-fit'>
                    {show ? 
                   <ReadOnly item={item}/>
                   :
                   <EditOnly 
                   inputVal={inputVal} 
                   inputVal2={inputVal2} 
                   inputVal3={inputVal3} 
                   inputVal4={inputVal4}
                   setInputVal={setInputVal} 
                   setInputVal2={setInputVal2} 
                   setInputVal3={setInputVal3} 
                   setInputVal4={setInputVal4}
                   />
                }
                    <div className='absolute right-0'>
                    <button onClick={() => {
                        updateData(item.id, {one: item.title, two: item.name, three: item.age, four:item.ok})
                        setShow(!show)
                    }} className='bg-orange-500 px-4 '>Edit</button>
                    </div>
                 </div>
             </li>
           </>
           ))}
            </ol>
         </div>
    
   
   </div>
     );
}

export default Grid