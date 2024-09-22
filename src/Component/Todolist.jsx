import React, { useState } from 'react'
import Note from '../assets/icon.png'
import Tick from '../assets/tick.png'
// import Not_tick from '../assets/not_tick.png'
import Trash from '../assets/delete.png'


const Todolist = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    //add items from input
    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('')
        }
    }

      // Delete
    const deleteTask = (id) => {
        console.log(id);
        const updateditems = items.filter((_elem, ind) => {
            return id !== ind;
        });
        setItems(updateditems);
    }

     // removeall
     const removeAll = () => {
        setItems([]);
    }

   
    return (
        <div className=' bg-white w-11/12 max-w-md flex flex-col p-7 h-auto rounded-xl relative'>

            {/*..... title.... */}
            <div className='flex items-center gap-2'>
                <img src={Note} alt="notebook" width={40} />
                <h1 className='text-2xl font-bold '>To-DoList-APP</h1>
            </div>

            {/*.......input & button....*/}
            <div className='flex justify-center mt-6 mb-6 rounded-full bg-gray-200'>
                <input type="text" placeholder='Add your text here...' className=' bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button className=' border-none rounded-full w-32 h-14 bg-[#f1615e] text-white font-bold cursor-pointer' onClick={addItem}>ADD</button>
            </div>

            {/*......To-do-items....... */}
            <div className='mb-3'>
                {items.map((elem, ind) => {
                    return (
                        <div key={ind}>
                            <ul>
                                <li className='flex relative items-center mb-3 gap-4'>
                                    <img className='w-5 cursor-pointer' src={Tick} alt="unchecked" />
                                    <span>{elem}</span>
                                    {/* delete */}
                                    <img className='w-5 absolute right-0 cursor-pointer' src={Trash} alt="delete" onClick={() => {deleteTask(ind)}} />
                                </li>
                                {/* <li>Task 2</li>
                                <li>Task 3</li>  */}
                            </ul>
                           
                        </div>
                    )
                })

                }
            </div>
                 <button className='flex justify-center items-center p-2 border-2 rounded-3xl bg-[#f1615e] font-bold text-white' onClick={removeAll}>Remove btn</button>
        </div>
    )
}

export default Todolist